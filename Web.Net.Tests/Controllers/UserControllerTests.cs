using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Web.Net.Controllers;
using Web.Net.Services;

namespace Web.Net.Tests.Controllers
{
    [TestClass()]
    public class UserControllerTests
    {
        public class TestHelper
        {
            public Mock<IUserService> MockUserService { get; set; }

            public TestHelper()
            {
                MockUserService = new Mock<IUserService>() { CallBase = true };
            }

            public UserController GetObjectUnderTest()
            {
                return new UserController(MockUserService.Object);
            }
        }

        [TestMethod()]
        public void GetUsersServiceIsCalled()
        {
            //Arrange
            var helper = new TestHelper();

            //Act
            helper.GetObjectUnderTest().Index();

            //Assert
            helper.MockUserService.Verify(x => x.GetUsers(), Times.Once);
        }

        [TestMethod()]
        public void SortUsersdServiceIsCalled()
        {
            //Arrange
            var helper = new TestHelper();
            var users = new[] { "Alex", "Harry", "Dan" };
            helper.MockUserService.Setup(x => x.GetUsers()).Returns(users);

            //Act
            helper.GetObjectUnderTest().Index();

            //Assert
            helper.MockUserService.Verify(x => x.SortUsers(It.IsAny<string[]>()), Times.Once);
        }



    }
}