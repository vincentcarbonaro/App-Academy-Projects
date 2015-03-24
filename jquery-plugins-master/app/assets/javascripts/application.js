// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$.FollowToggle = function (el) {

  this.$el = $(el);
  this.userID = this.$el.data("userId");
  this.followState = this.$el.data("followState");
  this.render();
  this.handleClick();
};

//inject the button text into the html
$.FollowToggle.prototype.render = function () {

  if (this.followState === "followed") {
    var button_text = "Unfollow"
    $.fn.prop("disable", false);
  } else if (this.followState === "unfollowed") {
    var button_text = "Follow";
    $.fn.prop("disable", false);
  } else if(this.followState === "following") {
    $.fn.prop("disable", true);
  } else if(this.followState === "unfollowing") {
    $.fn.prop("disable", true);
  }

  // this.$el.empty();
  // this.$el.append(button_text);
  // HTML will empty AND appened in 1 step

  this.$el.html(button_text);
};

$.FollowToggle.prototype.handleClick = function () {

  var that = this;

  this.$el.click(function(event){

    event.preventDefault();

    if(that.followState === "unfollowed"){

        that.followState = "following";
        //GET REQUEST, FOLLOW USER
        $.ajax({

          url: "/users/" + that.userID + "/follow",
          type:"POST",
          success: function(data){
            that.followState = "followed";
            that.render();
            console.log("User Successfully followed")
          },
          error: function(data){
            console.log("User follow Failed")
          }

        });
    }
    else if(that.followState === "followed")
    {
        that.followState = "unfollowing";
        //DELETE REQUEST, UNFOLLOW USER
        $.ajax({

          url: "/users/" + that.userID + "/follow",
          type:"DELETE",
          success: function(data){
            that.followState = "unfollowed";
            that.render();
            console.log("User Successfully Unfollowed")
          },
          error: function(data){
            console.log("User Unfollow Failed")
          }

        });
    }

  });

}

$.fn.followToggle = function () {
  return this.each(function () {
    new $.FollowToggle(this);
  });
};

$(function () {
  $("button.follow-toggle").followToggle();
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////


$.UsersSearch = function (el) {

  this.$el = $(el);
  this.$ul = this.$el.find(".users");
  this.$input = this.$el.find(".input-text");
  this.handleInput();

  //console.log(this.ul);
  //console.log(this.inputText.val());
};

//inject the button text into the html
$.UsersSearch.prototype.renderResults = function (users) {

  this.$ul.empty();

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    var $a = $("<a></a>");
    $a.text(user.username);
    $a.attr("href", "/users/" + user.id);

    var $followToggle = $("<button></button>");
    $followToggle.followToggle({
      userId: user.id,
      followState: user.followed ? "followed" : "unfollowed"
    });

    var $li = $("<li></li>");
    $li.append($a);
    $li.append($followToggle);

    this.$ul.append($li);
  }

};

$.UsersSearch.prototype.handleInput = function () {

  var that = this;

  that.$input.keypress(function(event){

    //search request
    $.ajax({

      data: that.$input.val(),
      dataType: "json",
      url: "/users/search",
      type:"GET",
      success: function(data){
        console.log("Successful Search")
        that.renderResults(data);
      },
      error: function(data){
        console.log("Unsuccessful")
      }

    });

  });

}

$.fn.usersSearch = function () {
  return this.each(function () {
    new $.UsersSearch(this);
  });
};

$(function () {
  $("body.users-search").usersSearch();
});
