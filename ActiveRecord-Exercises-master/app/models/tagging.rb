class Tagging < ActiveRecord::Base

  belongs_to :tag_topic,
    class_name: "TagTopic",
    foreign_key: :tag_topic_id,
    primary_key: :id

  belongs_to :shortened_url,
    class_name: "ShortenedURL",
    foreign_key: :shortened_url_id,
    primary_key: :id


  def self.tag!(tag_topic, shortened_url)
    Tagging.create(tag_topic: tag_topic, shortened_url: shortened_url)
  end
end
