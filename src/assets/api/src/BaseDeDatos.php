<?php

    class BaseDeDatos {
        
        public static $datos = "mysql:host=localhost;dbname=id7994407_comanda"; // Nombre de la base de datos...
        public static $user = "id7994407_facundo"; // Nombre del usuario de la base de datos...
        public static $pass = "facundo"; // Contraseña de la base de datos...
        public static $url = "https://la-comanda.000webhostapp.com/assets/api/login"; // Nombre del dominio...

        public static function ListarEntidades($request, $response, $consulta) {

            $datos = BaseDeDatos::$datos;
            $user  = BaseDeDatos::$user;
            $pass  = BaseDeDatos::$pass;
            $url   = BaseDeDatos::$url;
            $entidades = [];

            try {

                $conexion = new PDO($datos, $user, $pass);
                $resultados = $conexion->prepare($consulta);
                $resultados->execute();

                while($fila = $resultados->fetch(PDO::FETCH_ASSOC)) {
                        
                    array_push($entidades , $fila);
                }
  
                $response->getBody()->write('{"entidades":'.json_encode($entidades).'}');
            } catch(Exception $exception) {

                $response->getBody()->write('{"valido":"false","mensaje":"Se ha atrapado una excepcion: '.$exception->getMessage().'"}');
            }

        }

        public static function EjecutarConsulta($request, $response, $consulta) {

            $datos = BaseDeDatos::$datos;
            $user  = BaseDeDatos::$user;
            $pass  = BaseDeDatos::$pass;
            $url   = BaseDeDatos::$url;
            $datosUsuario = $request->getParsedBody();

            try {

                $conexion = new PDO($datos, $user, $pass);
                $resultados = $conexion->prepare($consulta);
                $resultados->execute();
                $response->getBody()->write('{"valido":"true"}');
            } catch(Exception $exception) {

                $response->getBody()->write('{"valido":"false","mensaje":"Se ha atrapado una excepcion: '.$exception->getMessage().'"}');
            }
        }

    }

?>