export const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Image Processing</title>
    <style>
        body{
            font-family: 'Poppins', sans-serif;
        }
        h1{
            text-align: center;
            color: #fff;
        }
        h1 span{
            background-color: crimson;
            border-radius: 25px;
            padding: 5px 10px;
        }
        h2{
            margin: 10px;
        }
        .label-wrapper , #btn , #linkWrapper{
            margin: 10px;
        }
    </style>
</head>
<body>
    <h1><span>Image Processing API</span></h1>

    <section>
        <h2>That is a link generator for your image</h2>

        <div class="label-wrapper">
            <label for="imageName">Please select image from the following:</label>
            <select name="imageName" id="imageName">
                <option value="encenadaport">encenadaport</option>
                <option value="fjord">fjord</option>
                <option value="icelandwaterfall">icelandwaterfall</option>
                <option value="palmtunnel">palmtunnel</option>
                <option value="santamonica">santamonica</option>
            </select>
        </div>

        <div class="label-wrapper">
            <label for="width">Please enter width</label>
            <input type="number" id="width" name="width" min="1">
        </div>

        <div class="label-wrapper">
            <label for="height">Please enter height</label>
            <input type="number" id="height" name="height" min="1">
        </div>

        <button id="btn">Generate</button>

        <div id="linkWrapper"></div>
        
    </section>



    <script>
        const btn = document.querySelector("#btn");
        const linkWrapper = document.querySelector("#linkWrapper")
        btn.addEventListener("click" , ()=>{
            let imageName = document.querySelector("#imageName").value;
            let width = parseInt(document.querySelector("#width").value);
            let height = parseInt(document.querySelector("#height").value);
            linkWrapper.innerHTML = '<a target="_blank" href="http://localhost:4000/api/images?filename='+ imageName +'&width='+ width +'&height='+ height +'">View '+ imageName +' </a>';
        })
    </script>
</body>
</html>`