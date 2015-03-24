class Track < ActiveRecord::Base

  validates :title, presence: true

  belongs_to(
    :album,
    class_name: "Album",
    foreign_key: :album_id,
    primary_key: :id
  )

  has_one(
    :band,
    through: :album,
    source: :band
  )

end
