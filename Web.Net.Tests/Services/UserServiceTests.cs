using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Web.Net.Services;

namespace Web.Net.Tests.Services
{
    [TestClass()]
    public class UserServiceTests
    {
        [TestMethod()]
        public void UsersAreSortedAscending()
        {
            //Arrange
            var service = new UserService();
            var users = new[] {"Alex", "Harry", "Dan"};
            var usersSorted = new[] { "Alex", "Dan", "Harry" };

            //Act
            var result = service.SortUsers(users);

            //Assert
            Assert.IsTrue(usersSorted.SequenceEqual(result));
        }
    }
}