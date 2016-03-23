namespace Web.Net.Services
{
    public interface IUserService
    {
        string[] GetUsers();
        string[] SortUsers(string[] users);
        string Message { get; }
    }
}