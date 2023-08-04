/** @jest-environment jsdom */

const { validarIdade } = require("./script.js")

test('validar idade maior', function() {
    var resultado = validarIdade('18');
    expect(resultado).toBe(true);
  })



test('validar idade menor', function() {
    var resultado = validarIdade('12');
    expect(resultado).toBe(false);
  })