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

    // $app->group("/pedidos", function() {

    //     $this->get("[/]", function(Request $request, Response $response) {

    //         Usuario::ObtenerTodosLosPedidos($request, $response);
    //         return $response;
    //     });

    //     $this->post("[/]", function(Request $request, Response $response) {

    //         Usuario::SetearScore($request, $response);
    //         return $response;
    //     });
    // })->add(function($request, $response, $next) {

    //     Middleware::VerificarJWT($request, $response, $next, apache_request_headers()["token"]);
    //     return $response;
    // });

    // $app->group("/mesas", function() {

    //     $this->get("[/]", function(Request $request, Response $response) {

    //         BaseDeDatos::ListarEntidades($request, $response, "SELECT * FROM `mesas`");
    //         return $response;
    //     });

    //     $this->post("[/]", function(Request $request, Response $response) {

    //         $consulta = $request->getParsedBody();
    //         BaseDeDatos::EjecutarConsulta($request, $response, $consulta["consulta"]);
    //         return $response;
    //     });
    // })->add(function($request, $response, $next) {

    //     Middleware::VerificarJWT($request, $response, $next, apache_request_headers()["token"]);
    //     return $response;
    // });

    // $app->group("/listar/", function() {

    //     $this->get("usuarios[/]", function(Request $request, Response $response) {

    //         BaseDeDatos::ListarEntidades($request, $response, "SELECT * FROM `usuarios`");
    //         return $response;
    //     });

    //     $this->get("mesas[/]", function(Request $request, Response $response) {

    //         BaseDeDatos::ListarEntidades($request, $response, "SELECT * FROM `mesas`");
    //         return $response;
    //     });

    //     $this->get("pedidos[/]", function(Request $request, Response $response) {

    //         BaseDeDatos::ListarEntidades($request, $response, "SELECT * FROM `pedidos`");
    //         return $response;
    //     });

    // })->add(function($request, $response, $next) {

    //     Middleware::VerificarJWT($request, $response, $next, apache_request_headers()["token"]);
    //     return $response;
    // });

    $app->get("[/]", function(Request $request, Response $response) {

        $entidad = $request->getQueryParams();
        BaseDeDatos::ListarEntidades($request, $response, "SELECT * FROM `".$entidad["entidad"]."`");
        return $response;
    })->add(function($request, $response, $next) {

        Middleware::VerificarJWT($request, $response, $next, apache_request_headers()["token"]);
        return $response;
    });

    $app->post("[/]", function(Request $request, Response $response) {

        $consulta = $request->getParsedBody();
        BaseDeDatos::EjecutarConsulta($request, $response, $consulta["consulta"]);
        return $response;
    })->add(function($request, $response, $next) {

        Middleware::VerificarJWT($request, $response, $next, apache_request_headers()["token"]);
        return $response;
    });


    //Agrego esto para obtener un pedido de un cliente determinado
    $app->group("/pedido", function() {
        $this->get("[/]", function(Request $request, Response $response) {
            Usuario::TraerPedido($request, $response);
            return $response;
        });
    })->add(function($request, $response, $next) {

        Middleware::VerificarJWT($request, $response, $next, apache_request_headers()["token"]);
        return $response;
    });


    $app->run();

?>