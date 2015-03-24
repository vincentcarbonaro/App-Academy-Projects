# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


t1 = TagTopic.create(topic_name: "news")
t2 = TagTopic.create(topic_name: "sports")
t3 = TagTopic.create(topic_name: "music")
t4 = TagTopic.create(topic_name: "porn")

u = User.create(email: "lol@lol.com")
u2 = User.create(email: "vin@vin.com")
u3 = User.create(email: "matt@matt.com")

su = ShortenedURL.create_for_user_and_long_url!(u, "youtube.com")
su2 = ShortenedURL.create_for_user_and_long_url!(u, "google.com")
su3 = ShortenedURL.create_for_user_and_long_url!(u, "moviefone.com")
su4 = ShortenedURL.create_for_user_and_long_url!(u, "yahoo.com")

Tagging.tag!(t1, su)
Tagging.tag!(t4, su2)
Tagging.tag!(t4, su3)
Tagging.tag!(t4, su4)


#10.times { Visit.record_visit!(u, su)}

20.times { Visit.record_visit!(u, su)}

5.times { Visit.record_visit!(u2, su2)}

10.times { Visit.record_visit!(u3, su3)}

30.times { Visit.record_visit!(u3, su4)}
