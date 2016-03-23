using System.Web.Mvc;
using Web.Net.Models;
using Web.Net.Services;

namespace Web.Net.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        public UserController()
        {
            _userService = new UserService();
        }


        public ActionResult Index()
        {
            var userModel = new UserModel();

            userModel.Message = _userService.Message;

            userModel.Users = _userService.SortUsers(_userService.GetUsers());

            return View("Index", userModel);
        }


        //method to return users as json for angular
        public JsonResult GetUsers()
        {
            var users = _userService.GetUsers();

            return Json(users, JsonRequestBehavior.AllowGet);
        }
    }
}