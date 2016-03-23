using System.IO;
using System.Linq;

namespace Web.Net.Services
{
    public class UserService : IUserService
    {
        public string[] GetUsers()
        {
            var users = File.ReadAllLines(@"C:\JSUnitTestDemo\WEb.Net\usersSource.txt");
            return users;
        }

        public string[] SortUsers(string[] users)
        {
            return users.OrderBy(x => x).ToArray();
        }

        public string Message
        {
            get { return "Hello from .NET service!"; }
        }
    }
}