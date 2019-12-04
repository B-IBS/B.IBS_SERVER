db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [
      {
        role: "root",
        db: "admin"
      }
    ]
  }
)
db.createUser(
  {
    user: "ermes_api_funnel",
    pwd: "ermes_api_funnel",
    roles: [
      {
        role: "readWrite",
        db: "ermes_funnel"
      }
    ]
  }
)