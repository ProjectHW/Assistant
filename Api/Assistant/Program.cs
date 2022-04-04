using Application;
using Domain;
using Infrastructure;
using Microsoft.OpenApi.Models;

namespace Assistant
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDomain(builder.Configuration);
            builder.Services.AddApplication(builder.Configuration);
            builder.Services.AddInfrastructure(builder.Configuration);
            builder.Services.AddConfigureSettings(builder.Configuration);

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(swaggerOptions =>
            {
                swaggerOptions.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Assistant.Api",
                    Version = "v1"
                });
            });

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(swaggerOptions => swaggerOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "Assistant v1"));
            }

            app.Run();
        }
    }
}
