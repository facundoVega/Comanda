<?php

    require_once './src/BaseDeDatos.php';
    use \Firebase\JWT\JWT;

    class Usuario {

        public static function Logear($request, $response) {

            $datosUsuario = $request->getParsedBody();
         //   $datosUsuario["nombre"] = $request->getAttribute('nombre');
         $datosUsuario["tipo"] = $request->getAttribute('tipo');
         $datosUsuario["nombre"] = $request->getAttribute('nombre');
            $key = "12345";
            $token = array(

              //  "tipo" => $datosUsuario["nombre"],
              "nombre" =>  $datosUsuario["nombre"],
              "tipo" => $datosUsuario["tipo"],
                "clave" => $datosUsuario["clave"],
                "correo" => $datosUsuario["correo"]
              
            );

            $jwt = JWT::encode($token, $key);

            $response->getBody()->write('{"token":"'.$jwt.'"}');
        }

        public static function Registrar($request, $response) {

     
            $cliente="cliente";
            $datosUsuario = $request->getParsedBody();
            $conexion = $request->getAttribute('conexion');

            $consulta = "INSERT INTO `usuarios`(`correo`, `nombre`, `clave`, `tipo`) VALUES (
                '".$datosUsuario["correo"]."',
                '".$datosUsuario["nombre"]."',
                '".$datosUsuario["clave"]."',
                '".$cliente."'
               )";

            $resultados = $conexion->prepare($consulta);
            $resultados->execute();
            $response->getBody()->write('{"valido":"true se registro "}');
            return $response;
        }

        public static function TraerPedido($request, $response) {

     
            $datos = BaseDeDatos::$datos;
            $user  = BaseDeDatos::$user;
            $pass  = BaseDeDatos::$pass;
            $url   = BaseDeDatos::$url;
            $datosUsuario = $request->getQueryParams();
            $entidades = [];


            try {
                $conexion = new PDO($datos, $user, $pass);
                $consula = "SELECT * FROM `pedidos` WHERE `cliente`='".$datosUsuario["cliente"]."'";
                $resultados = $conexion->prepare($consula);
                $resultados->execute();
                while($fila = $resultados->fetch(PDO::FETCH_ASSOC)) {
                        
                    array_push($entidades , $fila);
                }
             //   $fila = $resultados->fetch(PDO::FETCH_ASSOC);
               // $response->getBody()->write('{"pedido":"'.$fila[$datosUsuario["juego"]].'"}');
               $response->getBody()->write('{"entidades":'.json_encode($entidades).'}');

            } catch(Exception $exception) {
                $response->getBody()->write('{"valido":"false","mensaje":"Se ha atrapado una excepcion: '.$exception->getMessage().'"}');
            }


        }


    }

?>