namespace OpenAiWorkshopPlugin;

public class Program
{
    private static bool _buttonStatus;

    public static void Main(string[] args)
    {
        var app = WebApplication.CreateBuilder(args).Build();

        app.MapGet("/buttonStatus", () =>
        {
            app.Logger.LogInformation("Return button status '{ButtonStatus}'", _buttonStatus);
            return new { ButtonStatus = _buttonStatus };
        });

        app.MapGet("/buttonToggle", () =>
        {
            _buttonStatus = !_buttonStatus;
            app.Logger.LogInformation("Toggle button status to '{ButtonStatus}'", _buttonStatus);
        });

        app.MapGet("/swagger.yaml", () =>
            """
            openapi: 3.0.0
            info:
              title: Button Status API
              version: 1.0.0
              description: A simple API to get and toggle a button status.
            paths:
              /buttonStatus:
                get:
                  operationId: getButtonStatus
                  summary: Get Button Status
                  description: Returns the current status of the button (true or false).
                  responses:
                    '200':
                      description: Successfully retrieved the status of the button.
              /buttonToggle:
                get:
                  operationId: toggleButtonStatus
                  summary: Toggle Button Status
                  description: Toggles the current status of the button.
                  responses:
                    '200':
                      description: Successfully toggled the status of the button.
            """);

        app.Run();
    }
}
