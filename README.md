# Instalação

Aqui sera feito a instalaçao do NGRX, para assim, poder utilizar este projeto-base sempre 
que for programar em NGRX. Com isto, evitar que seja feito toda a instalação manualmente item por item. 

## Caso queira fazer instalação individual, no item "@ngrs/schematics" é necessário fazer 2 instalações:

* npm install @ngrx/schematics --save-dev

* ng add @ngrx/schematics@latest

## Caso esta segunda instação nao seja feita, o "Feature" a qual instala as actions, effects, reducer and selectors nao funcionará, sendo necessário a instalação individual de cada um deles