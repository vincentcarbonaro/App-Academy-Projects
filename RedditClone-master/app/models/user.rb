class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many(
    :subs,
    class_name: "Sub",
    foreign_key: :moderator_id,
    primary_key: :id
  )

  has_many(
    :posts,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :author_id,
    primary_key: :id
  )

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
