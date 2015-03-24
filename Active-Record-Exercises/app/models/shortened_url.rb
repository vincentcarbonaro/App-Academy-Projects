class ShortenedURL < ActiveRecord::Base

  validates :short_url, presence: true, uniqueness: true
  validates :long_url, presence: true, uniqueness: true, length: { maximum: 255 }
  validates :submitter_id, presence: true
  validate :user_paces_self

  belongs_to :submitter,
    class_name: "User",
    foreign_key: :submitter_id,
    primary_key: :id

  has_many :visits,
    class_name: "Visit",
    foreign_key: :shortened_url_id,
    primary_key: :id

  has_many :visitors,
    -> { distinct },
    through: :visits,
    source: :user

  has_many :taggings,
    class_name: "Tagging",
    foreign_key: :shortened_url_id,
    primary_key: :id

  has_many :tag_topics,
    through: :taggings,
    source: :tag_topic

  def self.random_code
    begin
      code = SecureRandom::urlsafe_base64
    end until !ShortenedURL.exists?(short_url: code)

    code
  end

  def self.create_for_user_and_long_url!(user, long_url)
    code = random_code
    ShortenedURL.create!(
      submitter: user,
      long_url: long_url,
      short_url: code
    )
  end

  def num_clicks
    visits.count
  end

  def num_uniques
    visitors.count
  end

  def num_recent_uniques
    Visit.where(
      created_at: (10.minutes.ago..Time.now),
      shortened_url_id: id
    ).count(:user_id, distinct: true)
  end

  private
  def user_paces_self

    if submitter.short_urls.where(created_at: (1.minutes.ago..Time.now)).count > 4
      errors[:base] << "User cannot enter more than 5 urls per minute. Chill."
    end

  end

end
