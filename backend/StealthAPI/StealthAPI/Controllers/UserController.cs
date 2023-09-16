﻿using Microsoft.AspNetCore.Mvc;
using StealthAPI.Models;

namespace StealthAPI.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public List<User> Users(int? id = null)
        {
            using (var db = new StealthdbContext())
            {
                if (id == null)
                {
                    return db.Users.ToList();
                }
                return db.Users.Where(user => user.Id == id).ToList();
            }
        }

        [HttpPost]
        public bool Login(User user) 
        {
            using (var db = new StealthdbContext())
            {
                var users = db.Users.Where(u => user.Username == u.Username && user.Password == u.Password).ToList();
                return users.Count == 1;
            }
        }

        [HttpPost]
        public bool Register(User user)
        {
            using (var db = new StealthdbContext())
            {
                var existingUser = db.Users.Where(u => u.Username == user.Username).ToList();
                if (existingUser.Count == 0) {
                    db.Users.Add(user);
                    db.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}
