# General

## frontend

* create-react-app, of course, because everything working out of the box
* react-router
* a11y
* test by lighthouse

## backend

* typescript & types definitions for Giphy API
* jwt for auth
* fake db (notarealdb)
* tests (???)

## database

### users
```
{
    id: ID
    login: String
    password: String
    likes: [Like]
    history: [History]
}
```

### history
```
{
    id: ID
    text: String
    searchedBy: [User]
}
```

### likes
```
{
    id: ID
    imageUrl: String
    likedBy: [User]
}
```