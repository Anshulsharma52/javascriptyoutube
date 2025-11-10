# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 2

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <!-- <link rel="stylesheet" href="../styles.css" /> -->
    <style>
        .container {
            width: 575px;
            height: 825px;

            background-color: #797978;
            padding-left: 30px;
        }

        #height,
        #weight {
            width: 150px;
            height: 25px;
            margin-top: 30px;
        }

        #weight-guide {
            margin-left: 75px;
            margin-top: 25px;
        }

        #results {
            font-size: 35px;
            margin-left: 90px;
            margin-top: 20px;
            color: rgb(241, 241, 241);
        }

        #text {
            font-size: 35px;
            margin-left: 90px;
            margin-top: 20px;
            color: rgb(241, 241, 241);
        }

        button {
            width: 150px;
            height: 35px;
            margin-left: 90px;
            margin-top: 25px;
            background-color: #fff;
            padding: 1px 30px;
            border-radius: 8px;
            color: #212121;
            text-decoration: none;
            border: 2px solid #212121;

            font-size: 25px;
        }

        h1 {
            padding-left: 15px;
            padding-top: 25px;

        }
    </style>
    <title>BMI Calculator</title>
</head>

<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="_blank" href="https://www.youtube.com/@chaiaurcode">Youtube channel</a>
    </nav>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
            <p><label>Height in CM: </label><input type="text" id="height" /></p>
            <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
            <button>Calculate</button>
            <div id="results"></div>
            <div id="text"></div>
            <div id="weight-guide">
                <h3>BMI Weight Guide</h3>
                <p>Under Weight = Less than 18.6</p>
                <p>Normal Range = 18.6 and 24.9</p>
                <p>Overweight = Greater than 24.9</p>
            </div>
        </form>
    </div>
</body>
<script>
    const form = document.querySelector('form');

    // This usecase will give you empty
    // const height = parseInt(document.querySelector('#height').value);
    //   const weight =  parseInt(document.querySelector('#weight').value);


    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector('#results');
        const text = document.querySelector('#text');

        if (height === '' || height < 0 || isNaN(height)) {
            result.innerHTML = `Please give a valid height ${height}`;
        } else if (weight === '' || weight < 0 || isNaN(weight)) {
            result.innerHTML = `Please give a valid weight ${weight}`;
        } else {
            const BMI = (weight / ((height * height) / 10000)).toFixed(2)
            //show  the result
            result.innerHTML = `<span>${BMI}</span>`
            if (BMI < 18.6) {
                text.innerHTML = 'Under weight'
            }
            else if (BMI >= 18.6 && BMI <= 24.9) {
                text.innerHTML = 'Normal range'
            }
            else {
                text.innerHTML = 'Overweight'
            }
        }

    });

</script>

</html>
```