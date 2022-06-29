export const cal = (e, datos, set) => {

  e.preventDefault();
  const { monto, interes, plazo } = datos;
  const taza = (interes / 12) / 100;
  const cuota = (monto * ((Math.pow((1 + taza), plazo) * taza) / (Math.pow((1 + taza), plazo) - 1)));
  let saldo = monto;
  let dato = {
    cuota: cuota,
    interes: '',
    abono: '',
    saldo: ''
  };
  const c = cuota.toFixed(2);
  const obj = [];
  let totalInteres = 0;

  for (let index = 0; index < plazo; index++) {

    let interes = (saldo * taza);
    totalInteres += interes;
    let abono = (cuota - interes);
    saldo = (saldo - abono);
    let i = interes.toFixed(2);
    let a = abono.toFixed(2);
    let s = saldo.toFixed(2);
    dato = { c, i, a, s };
    obj.push(dato);

  }
  obj["totalInteres"] = totalInteres;
  obj["monto"] = monto;
  obj["pagos"] = plazo;
  obj["cuota"] = cuota;
  set(obj)
}