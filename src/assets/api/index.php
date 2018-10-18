<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    require_once './src/Usuario.php';
    require_once './src/Middleware.php';
    require_once './vendor/autoload.php';

    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;
    $config['determineRouteBeforeAppMiddleware'] = true;
    $app = new \Slim\App(["settings" => $config]);

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
    header("Content-Type: application/json");

    $app->post("/login[/]", function(Request $request, Response $response) {

        Usuario::Logear($request, $response);
        return $response;
    })->add(\Middleware::class . ":VerificarExistencia");

    $app->post("/registro[/]", function(Request $request, Response $response) {

        Usuario::Registrar($request, $response);
        return $response;
    })->add(\Middleware::class . ":VerificarExistencia");

    $app->group("/score", function() {

        $this->get("[/]", function(Request $request, Response $response) {

            Usuario::ObtenerScore($request, $response);
            return $response;
        });

        $this->get("/obtener-scores[/]", function(Request $request, Response $response) {

            Usuario::ObtenerTodosLosScores($request, $response);
            return $response;
        });

        $this->post("[/]", function(Request $request, Response $response) {

            Usuario::SetearScore($request, $response);
            return $response;
        });
    })->add(function($request, $response, $next) {

        Middleware::VerificarJWT($request, $response, $next, apache_request_headers()["token"]);
        return $response;
    });

    $app->run();

?>