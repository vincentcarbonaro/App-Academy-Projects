class Visit < ActiveRecord::Base

  belongs_to :short_url,
    class_name: "ShortenedURL",
    foreign_key: :shortened_url_id,
    primary_key: :id

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  def self.record_visit!(user, shortened_url)
    Visit.create!(user: user, short_url: shortened_url)
  end

end
