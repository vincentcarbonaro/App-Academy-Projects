class Band < ActiveRecord::Base

  has_many(
    :albums,
    class_name: "Album",
    foreign_key: :band_id,
    primary_key: :id
  )

  has_many(
    :songs,
    through: :albums,
    source: :tracks
  )

end
