# Ghsearch

GitHub user search implementation.

## Choosing Framework

I chose to use Angular, because I wanted to excercise my skills in a search implementationusing Angular.
Since I have created search imlementations before with React (during my previous employment), I wanted
to see the same things in Angular, too. Also, I estimated that it would take me less time to have
something ready!

## GitHub API 

I used the [Github REST API v3](https://developer.github.com/v3/) and more specifically the user search,
as required, and as documented [here](https://developer.github.com/v3/search/#search-users).

In order to implement the pagination feature, I used [this](https://developer.github.com/v3/#pagination)
documentation. As noted here, the maximum results per page is 100, and I have limited it as such.

## Room for improvement

* Better UI

  If I had more time, I would improve the user interface by adding a header and a footer with information about the
  application.

  I would also improve the UI for each user profile, as well as other small additions.

* Bugs - Omissions
  
  * There is a bug with the pagination. Although the number of pages is correctly calculated accoring to the total
    number of results, still the last pages (in varying number) do not seem to return any results. I would investigate
    this further to understand the issue or come up with a rule

  * I would create a logic where the pages in the pagination links progress as you move along,
    keeping the first two and the last two always visible, but adding more number as you move, quite
    like the original GitHub search

* Extras
  
  I have to add more information displayed for each user, like their bio and follower count.
  This information is not readily available in the first API call that fetches the list of the users,
  but is rather available in the user details call. So, maybe show this information only when the
  user clicks or hovers over a user, in order not to overload the server with parallel requests.

