import { Triangle } from './triangle-logic';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
    $("form#triangleCalculator").submit(function(event) {
        event.preventDefault();
    });
});