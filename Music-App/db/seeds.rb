# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

b1 = Band.create(name: "Metallica")
b2 = Band.create(name: "Avenged Sevenfold")
b3 = Band.create(name: "Weezer")

a1 = Album.create(title: "The Black Album", band_id: 1)

a4 = Album.create(title: "City of Evil", band_id: 2)

a7 = Album.create(title: "Everything Will Be Alright In The End", band_id: 3)

t1 = Track.create(title: "Fade to Black", album_id: 1)

t3 = Track.create(title: "Crossroads", album_id: 2)

t5 = Track.create(title: "Cleopatra", album_id: 3)
