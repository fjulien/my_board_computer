# My tool and portfolio website

## Architecture

#### Diagram operation Redux
<img src="https://github.com/fjulien/my_board_computer/blob/master/image-read-me/diagramFunctionRedux.svg?sanitize=true">

[Schema url](http://www.diagram.codes/d/graph/alias%20r%3D%22Reducer%20(in%20store%20folder)%22%0Aalias%20a%3D%22Action%20(in%20store%20folder)%22%0Aalias%20co%3D%22Component%22%0Aalias%20t%3D%22Type%20(in%20store%20folder)%22%0A%0At-%3Eco%0At-%3Ea%0At-%3Er%0A%0Aco-%3Ea%0Aa-%3Er%0Ar-%3Eco)


#### Diagram operation Terminatest
<img src="https://github.com/fjulien/my_board_computer/blob/master/image-read-me/diagramFunctionTerminatest.svg?sanitize=true">

[Schema url](www.diagram.codes/d/sequence/alias%20mt%3D%22Test%20Maker%20(Actions)%22%0Aalias%20tt%3D%22Thred%20Test%20(Test)%22%0Aalias%20vt%3D%22View%20Test%22%0Aalias%20f%3D%22Form%20action%20(in%20test%20maker)%22%0A%0Amt%3D%3Emt%3A%20%22Create%20first%20object%20Test%22%20%0Amt-%3Ef%3A%20%22Create%20new%20Action%22%0Af--%3Ef%3A%20%22make%20the%20action%22%0Af-%3Ett%3A%20%22Send%20new%20action%20in%20Test%22%20%0Att-%3Ef%3A%20%22Edit%20action%22%0Att--%3Ett%3A%20%22Delete%20action%20in%20Test%22%0Att-%3Evt%3A%20%22Start%20test%22%0Avt--%3Evt%3A%20%22View%20test's%20actions%20success%20or%20fail%22%0Avt--%3Evt%3A%20%22Bilan%22%0Amt-%3Ef%3A%20%22Add%20new%20action%20in%20Test%22%20%0A%0A%23%3D%3E%0A%23--%3E%0A%0A)

>node_modules
>
>public
>
>src
>
>-/components
>
>-/-/footer-bar
>
>-/-/navigation-bar
>
>-/-/terminatest
>
>-/-/-/inputs
>
>-/-/-/test-maker
>
>-/-/-/test-threds
>
>-/-/-/view-test
>
>-/constants
>
>-/media
>
>-/-/fonts
>
>-/-/images
>
>-/store
>
>-/-/terminatest
>
>-/-/-/action
>
>-/-/-/reducer
>
>-/-/-/type
>
>-/test

## Technologies

- ReactJs with TypeScript and Hooks
- Use TDD (Type-Driven Development)
- Use TDD (Test-Driven Development) for unit tests
- SCSS preprocessor and CSS grid
- Reducer (the front backend)
- Bootstrap 

## Install

1. Clone the project :
``` Shell
git clone https://github.com/fjulien/my_board_computer.git
```
2. Install project :
``` Shell
npm install
```
3. Launch the project :
``` Shell
npm start
```
Automatically the project starts in this url => [http://localhost:3000](http://localhost:3000)

## Lauch tests

``` Shell
npm run test
```

#### Me remember
```
npm install puppeteer --unsafe-perm=true --allow-root
www.diagram.codes/d/graph/%22F-julien%22-%3E%22Termina-test%22%0A%22F-julien%22-%3E%22Statistics%22%0A%0A%22Termina-test%22-%3E%22Test%20maker%22%0A%22Termina-test%22-%3E%22Test%20threads%22%0A%22Termina-test%22-%3E%22View%20tests%22%0A%0A%22Test%20maker%22-%3E%22Help%22%5B%22Button%22%5D%0A%22Help%22-%3E%22Light%20box%20with%20GIF%22%5B%22Open%22%5D%0A%22Light%20box%20with%20GIF%22-%3E%22Termina-test%22%5B%22Close%20button%22%5D%0A%22Test%20maker%22-%3E%22Select%20function%22%5B%22Input%20type%20select%22%5D%0A%22Test%20maker%22-%3E%22Add%20function%20in%20test%20thread%22%5B%22Input%20submit%20(if%20test%20init)%22%5D%0A%22Select%20function%22-%3E%22Go%20to%20web%20page%22%2C%22Complete%20input%22%2C%22Click%20on%20element%22%2C%22Waitting%22%2C%22Screen%20shot%22%0A%0A%23Test%20maker%0A%22Click%20on%20element%22-%3E%22Element%20selector%22%5B%22string%22%5D%0A%22Complete%20input%22-%3E%22Content%22%5B%22string%22%5D%0A%22Complete%20input%22-%3E%22Element%20selector%22%5B%22string%22%5D%0A%22Go%20to%20web%20page%22-%3E%22Input%20URL%20website%22%5B%22string%22%5D%0A%22Waitting%22-%3E%22Input%20time%20waitting%22%5B%22int%22%5D%0A%22Click%20on%20element%22-%3E%22Input%20time%20waitting%22%5B%22int%22%5D%0A%0A%23Test%20threads%0A%22Test%20threads%22-%3E%22Test%22%0A%22Test%22-%3E%22Remove%20the%20step%22
```
