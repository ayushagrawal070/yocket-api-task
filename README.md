# API DOCUMENTATION

This API can be used to create posts like fb/linkedin where you have to make a POST request with the body as shown below. The GET method can be used to fetch all posts in which most recent post will be shown on top and we can also limit the number of post we want to fetch at a single time.

## How to use the API
Please use this live endpoint to test this API : 
Live endpoint : https://yocket-api.herokuapp.com/

## Create a Post
**Endpoint:** / POST method

**JSON body required**
```json
{
    "title" : "your title of post",
    "content" : "description of post"
}
```

## Fetch All Posts
**Endpoint:** / GET method


## Fetch fixed number of Posts 
We can fetch limited number of post by passing ```num``` as query to the GET request.

**Endpoint:** GET method
```
/?num={count of post}
```
