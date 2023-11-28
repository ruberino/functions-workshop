import ch.qos.logback.classic.encoder.JsonEncoder
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun main() {
    embeddedServer(Netty, port = 3000, module = Application::applicationModule).start(wait = true)
}

fun Application.applicationModule() {
    routing {
        var buttonStatus = false

        get("/buttonStatus") {
            println("Button status is $buttonStatus")
            call.respondText(
                text = "{\"status\": $buttonStatus}",
                contentType = ContentType.Application.Json
            )
        }

        get("/buttonToggle") {
            buttonStatus = !buttonStatus
            println("Button status toggled to $buttonStatus")
            call.respondText(
                text = "{\"toggledTo\": $buttonStatus}",
                contentType = ContentType.Application.Json
            )
        }

        get("/swagger.yaml") {
            val inputStream = this::class.java.classLoader.getResourceAsStream("swagger.yaml")
            if (inputStream != null) call.respondText(inputStream.bufferedReader().use { it.readText() })
            else call.respond(HttpStatusCode.NotFound, "Swagger YAML file not found")

        }
    }
}
