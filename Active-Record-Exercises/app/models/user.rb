class User < ActiveRecord::Base

  validates :email, presence: true, uniqueness: true

  has_many :short_urls,
    class_name: "ShortenedURL",
    foreign_key: :submitter_id,
    primary_key: :id

  has_many :visits,
    class_name: "Visit",
    foreign_key: :user_id,
    primary_key: :id

  has_many :visited_urls,
    -> { distinct },
    through: :visits,
    source: :short_url
end
