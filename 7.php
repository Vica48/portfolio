
<!DOCTYPE html>
<html lang="en">

<head>
    <!--
     - Roxy: Bootstrap template by GettTemplates.com
     - https://gettemplates.co/roxy
    -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ChZ-Arrays</title>
    <meta name="description" content="Roxy">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- External CSS -->
    <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="vendor/select2/select2.min.css">
    <link rel="stylesheet" href="vendor/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="vendor/lightcase/lightcase.css">
     <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400|Work+Sans:300,400,700" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.min.css">
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <!-- Modernizr JS for IE8 support of HTML5 elements and media queries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>

</head>
<body data-spy="scroll" data-target="#navbar" class="static-layout">
	<nav id="header-navbar" class="navbar navbar-expand-lg py-4">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center text-white" href=index.php>
            <h3 class="font-weight-bolder mb-0">Trabajos</h3>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header" aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
            <span class="lnr lnr-menu"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-nav-header">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href=index.php>Home</a>
                </li>
                
                <li class="nav-item">
                    <a id="side-search-open" class="nav-link" href="#">
                        <span class="lnr lnr-magnifier"></span>
                    </a>
                </li>
                 <li class="nav-item only-desktop">
                    <a class="nav-link" id="side-nav-open" href="#">
                        <span class="lnr lnr-menu"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>


<div id="side-nav" class="sidenav">
	<a href="javascript:void(0)" id="side-nav-close">&times;</a>
	
	<div class="sidenav-content">
		<p>
			Kuncen WB1, Wirobrajan 10010, DIY
		</p>
		<p>
			<span class="fs-16 primary-color">(+68) 120034509</span>
		</p>
		<p>info@yourdomain.com</p>
	</div>
</div><div id="side-search" class="sidenav">
	<a href="javascript:void(0)" id="side-search-close">&times;</a>
	<div class="sidenav-content">
		<form action="">

			<div class="input-group md-form form-sm form-2 pl-0">
			  <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search">
			  <div class="input-group-append">
			    <button class="input-group-text red lighten-3" id="basic-text1">
			    	<span class="lnr lnr-magnifier"></span>
			    </button>
			  </div>
			</div>

		</form>
	</div>
</div>
</div>

<div class="jumbotron d-flex align-items-center">
    
    
  <div class="rectangle-1"></div>
  <div class="rectangle-2"></div>
  <div class="rectangle-transparent-1"></div>
  <div class="rectangle-transparent-2"></div>
  <div class="circle-1"></div>
  <div class="circle-2"></div>
  <div class="circle-3"></div>
  <div class="triangle triangle-1">
  	<img src="img/obj_triangle.png" alt="">
  </div>
  <div class="triangle triangle-2">
  	<img src="img/obj_triangle.png" alt="">
  </div>
  <div class="triangle triangle-3">
  	<img src="img/obj_triangle.png" alt="">
  </div>
  <div class="triangle triangle-4">
  	<img src="img/obj_triangle.png" alt="">
  </div>
  <h1>7 Ejercicios de Array</h1>
  
  
</div>	<!-- Features Section-->
<center><section id="features" class="bg-white">
    <div class="container">
        <div class="section-content">
            <!-- Section Title -->
            <div class="title-wrap mb-5" data-aos="fade-up">
                <h2 class="section-title">
                    Ejercicios realizados con base en <a href="" target="_blank"> Arrays</a>
                </h2>
                
            </div>
            <!-- End of Section Title -->
            <div class="row">
                <!-- Features Holder-->
                <div class="col-md-12 offset-md-1 features-holder">
                    <div class="row">
                        <!-- Features Item -->
                        <div class="col-md-8 col-sm-12 text-center mt-4">
                            <div class="shadow rounded feature-item p-4 mb-4" data-aos="fade-up">
                                <div class="my-4">
                                    <i></i>
                                </div>
                                <h1>1</h1><br>
                                <p><?php

                                $Meses = array(
                                "enero" => 9, "febrero" => 12, "marzo" =>0, "abril" => 17
                                ); 
                                while (($dk = current($Meses)) !== false) {
                                if ($dk != 0) {
                                echo key($Meses).'<br />';
                                }
                                next($Meses);
                                    };
                                ?></p>
                                <br>
                                <h1>2</h1>
                                <br>
                                <p><?php
$cosa = array(
    90 => 1,
    7 => 30,
    99 => "e",
    43 => "hola"
);
foreach($cosa as $cosita => $b){
echo "\$V[$b]=> $cosita.\n<br>";
}
?></p>
<br>
<h1>3</h1>
<br>
<p>
<?php
$cosa = array(
    "Pedro Torres" => "Nombre",
    "C/ Mayor, 37" => "Dir",
    123456789 => "Tel",
);
foreach($cosa as $cosita => $b){
echo "$b=> $cosita.\n<br>";
}
?>
</p>
<br>
<h1>4</h1>
<br>
<p>
<?php

$ciudades = array("Madrid", "Barcelona", "Londres", "New York", "Los Angeles", "Chicago");
foreach($ciudades as $cosita => $b){
    echo "La ciudad con el indice $cosita tiene el nombre de $b.\n<br>";
    }
    ?>
</p>
<br>
<h1>5</h1>
<p><?php
$nombres = array("Pedro", "Ismael", "Sonia", "Clara", "Susana", "Alfonso", "Teresa");
list($a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6]) = $nombres;
$conteo = count($nombres);

echo "El array contiene: $conteo elementos<br>"; 
foreach ($a as $p){
    echo "$p<br>";
}
?></p>
<h1>6</h1>
<br>
<p>
<?php
$lenguajes_cliente= array(
    1 => "lkn51a351d",
    2 => "lkñ565safd",
    3 => "askjbfoasf"
);
$lenguajes_servidor = array(
1 => "aso65a4sf",
2 => "asn6531as",
3 => "asf6asf5a"
);
$lenguajes = array($lenguajes_cliente, $lenguajes_servidor);

$cliente = count($lenguajes_cliente);
$servidor = count($lenguajes_servidor);


for ($i=0; $i<$servidor or $i<$cliente; $i++){
    echo "
    <table border=1>
    <tbody>
      <tr>
        <td>$lenguajes_cliente[$i]</td>
        <td>$lenguajes_servidor[$i]</td>
      </tr>
      
    </tbody>
  </table>
    ";

    echo "<br>";
}
?>
</p>
<h1>7</h1><br>
<p>
<?php
$amigos = array(
    array("En Madrid:", "nombre Pedro,", "edad 32 años,", "teléfono 91-999.99.99
    "),
    array("En Barcelona:", "nombre Susana,", "edad 34 años,", "teléfono 93-000.00.00
    "),
    array("En Toledo:", "nombre Sonia,", "edad 42 años,", "teléfono 925-09.09.09
    ")
);

foreach($amigos as $donde){
    foreach($donde as $amigo){
        echo $amigo . " ";
    }
    echo "<br>";
}
?>
</p><br>

                            
                            </div>
                        </div>
                        <!-- End of Feature Item -->
                        </div>
                        <!-- End of Feature Item -->
                    </div>
                </div>
                <!-- End of Features Holder-->
            </div>
</div>
    </div>
</section></center>
<div id="section-content"></div>

<footer class="mastfoot my-3">
    <div class="inner container">
         <div class="row">
         	<div class="col-lg-4 col-md-12 d-flex align-items-center">
         	</div>
         	<div class="col-lg-4 col-md-12 d-flex align-items-center">
         		<p class="mx-auto text-center mb-0">&copy; 2022 Chable Zaldivar Jose Manuel<a href="" target="_blank"> 4-A IRD</a>.</p>
         	</div>
           
            <div class="col-lg-4 col-md-12">
            	<nav class="nav nav-mastfoot justify-content-center">
	                <a class="nav-link" href="#">
	                	<i class="fab fa-facebook-f"></i>
	                </a>
	                <a class="nav-link" href="#">
	                	<i class="fab fa-twitter"></i>
	                </a>
	                <a class="nav-link" href="#">
	                	<i class="fab fa-instagram"></i>
	                </a>
	                <a class="nav-link" href="#">
	                	<i class="fab fa-linkedin"></i>
	                </a>
	                <a class="nav-link" href="#">
	                	<i class="fab fa-youtube"></i>
	                </a>
	            </nav>
            </div>
            
        </div>
    </div>
</footer>	<!-- External JS -->
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
	<script src="vendor/bootstrap/popper.min.js"></script>
	<script src="vendor/bootstrap/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js "></script>
	<script src="vendor/owlcarousel/owl.carousel.min.js"></script>
	<script src="vendor/stellar/jquery.stellar.js" type="text/javascript" charset="utf-8"></script>
	<script src="vendor/isotope/isotope.min.js"></script>
	<script src="vendor/lightcase/lightcase.js"></script>
	<script src="vendor/waypoints/waypoint.min.js"></script>
	 <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
	 
	<!-- Main JS -->
	<script src="js/app.min.js "></script>
	<script src="//localhost:35729/livereload.js"></script>
</body>
</html>
