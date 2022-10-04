<?php

if(isset($_POST['imp'])){
    $nombre = $_POST['Nom'];
    $txt = $_POST['textoimp'];
    $tipo = $_POST['archiv'];
 
    if($tipo == 'pdf'){
       $fh = fopen("$nombre.pdf", 'w') or die("Se produjo un error al crear el archivo");
       $texto = <<<_END
    $txt
    _END;
       fwrite($fh, $texto) or die("No se pudo escribir en el archivo");
       fclose($fh);
       
       echo "<script> alert ('Tu archivo pdf se ha escrito sin problemas :)'); window.location ='imp.php'</script>";
 
    }else{
       if($tipo == 'word'){
          $fh = fopen("$nombre.docx", 'w') or die("Se produjo un error al crear el archivo");
          $texto = <<<_END
       $txt
       _END;
          fwrite($fh, $texto) or die("No se pudo escribir en el archivo");
          fclose($fh);
          
          echo "<script> alert ('Tu archivo word se ha escrito sin problemas :)'); window.location ='imp.php'</script>";
 
       }else{
          if($tipo == 'json'){
             $fh = fopen("$nombre.json", 'w') or die("Se produjo un error al crear el archivo");
             $texto = <<<_END
             $txt
             _END;
             fwrite($fh, $texto) or die("No se pudo escribir en el archivo");
             fclose($fh);
 
             echo "<script> alert ('Tu archivo json se ha escrito sin problemas :)'); window.location ='imp.php'</script>";
 
          }else{
             if($tipo == 'BdN'){
                $fh = fopen("$nombre.txt", 'w') or die("Se produjo un error al crear el archivo");
                $texto = <<<_END
                $txt
                _END;
                fwrite($fh, $texto) or die("No se pudo escribir en el archivo");
                fclose($fh);
    
                echo "<script> alert ('Tu bloc de notas se ha escrito sin problemas :)'); window.location ='imp.php'</script>";
    
             }
          }
       }
    }
 
 }

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!--
     - Roxy: Bootstrap template by GettTemplates.com
     - https://gettemplates.co/roxy
    -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ChZ-Impresion</title>
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
        <a class="navbar-brand d-flex align-items-center text-white" href="index.php">
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
	
</div>	<div class="jumbotron d-flex align-items-center">
  <div class="container text-center">
  <form action="imp.php" method="post">
    <h1>Impresion</h1>
         <div class="form-floating mb-3">
             <input class="form-control" id="inputEmail" type="text" placeholder="Nombre del archivo" name="Nom" />
         </div>
         <div class="form-floating mb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Inserte su texto aqui"; name="textoimp"></textarea>
         </div>
         <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio1" name="archiv" value="pdf">
          <label class="form-check-label" for="inlineRadio1">pdf</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio2" name="archiv" value="word">
          <label class="form-check-label" for="inlineRadio2">word</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio3" name="archiv" value="json">
          <label class="form-check-label" for="inlineRadio3">Json</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio4" name="archiv" value=dN">
          <label class="form-check-label" for="inlineRadio3">Bloc de notas</label>
        </div>
        <br>
         <div>
            <button type="submit" class="btn btn-dark" name="imp">Imprimir</button>
         </div>
     </form>
  </div>
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
</div>	<!-- Features Section-->

<footer class="mastfoot my-3">
    <div class="inner container">
         <div class="row">
         	<div class="col-lg-4 col-md-12 d-flex align-items-center">
         		
         	</div>
         	<div class="col-lg-4 col-md-12 d-flex align-items-center">
         		<p class="mx-auto text-center mb-0">&copy;  2022 Chable Zaldivar Jose Manuel<a href="" target="_blank"> 4-A IRD</a>.</p>
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
