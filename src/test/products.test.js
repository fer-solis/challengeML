import axios from 'axios';
import { fetchDetailProduct, fetchDescriptionProduct } from '../services/search';

jest.mock('axios');

describe('fetchDetailProductSearch', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      "id": "MLA785561286",
      "site_id": "MLA",
      "title": "Carro Plegable De Acero Boron ",
      "subtitle": null,
      "seller_id": 252406637,
      "category_id": "MLA371994",
      "official_store_id": null,
      "price": 9900,
      "base_price": 9900,
      "original_price": null,
      "currency_id": "ARS",
      "initial_quantity": 317,
      "available_quantity": 1,
      "sold_quantity": 250,
      "sale_terms": [
          {
              "id": "WARRANTY_TYPE",
              "name": "Tipo de garantía",
              "value_id": "6150835",
              "value_name": "Sin garantía",
              "value_struct": null,
              "values": [
                  {
                      "id": "6150835",
                      "name": "Sin garantía",
                      "struct": null
                  }
              ]
          },
          {
              "id": "PURCHASE_MAX_QUANTITY",
              "name": "Cantidad máxima de compra",
              "value_id": null,
              "value_name": "10",
              "value_struct": null,
              "values": [
                  {
                      "id": null,
                      "name": "10",
                      "struct": null
                  }
              ]
          }
      ],
      "buying_mode": "buy_it_now",
      "listing_type_id": "gold_pro",
      "start_time": "2019-05-09T20:31:50.000Z",
      "stop_time": "2041-10-15T11:24:52.000Z",
      "condition": "new",
      "permalink": "https://articulo.mercadolibre.com.ar/MLA-785561286-carro-plegable-de-acero-boron-_JM",
      "thumbnail_id": "983358-MLA31355909561_072019",
      "thumbnail": "http://http2.mlstatic.com/D_983358-MLA31355909561_072019-I.jpg",
      "secure_thumbnail": "https://http2.mlstatic.com/D_983358-MLA31355909561_072019-I.jpg",
      "pictures": [
          {
              "id": "983358-MLA31355909561_072019",
              "url": "http://http2.mlstatic.com/D_983358-MLA31355909561_072019-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_983358-MLA31355909561_072019-O.jpg",
              "size": "385x500",
              "max_size": "924x1200",
              "quality": ""
          },
          {
              "id": "966533-MLA31355903357_072019",
              "url": "http://http2.mlstatic.com/D_966533-MLA31355903357_072019-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_966533-MLA31355903357_072019-O.jpg",
              "size": "200x404",
              "max_size": "200x404",
              "quality": ""
          },
          {
              "id": "695428-MLA31355900982_072019",
              "url": "http://http2.mlstatic.com/D_695428-MLA31355900982_072019-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_695428-MLA31355900982_072019-O.jpg",
              "size": "290x466",
              "max_size": "290x466",
              "quality": ""
          },
          {
              "id": "947478-MLA47473013469_092021",
              "url": "http://http2.mlstatic.com/D_947478-MLA47473013469_092021-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_947478-MLA47473013469_092021-O.jpg",
              "size": "500x500",
              "max_size": "1200x1200",
              "quality": ""
          },
          {
              "id": "831397-MLA47472854821_092021",
              "url": "http://http2.mlstatic.com/D_831397-MLA47472854821_092021-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_831397-MLA47472854821_092021-O.jpg",
              "size": "500x500",
              "max_size": "1200x1200",
              "quality": ""
          },
          {
              "id": "661347-MLA43204904859_082020",
              "url": "http://http2.mlstatic.com/D_661347-MLA43204904859_082020-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_661347-MLA43204904859_082020-O.jpg",
              "size": "500x281",
              "max_size": "1200x675",
              "quality": ""
          },
          {
              "id": "936262-MLA40779235124_022020",
              "url": "http://http2.mlstatic.com/D_936262-MLA40779235124_022020-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_936262-MLA40779235124_022020-O.jpg",
              "size": "500x305",
              "max_size": "984x602",
              "quality": ""
          },
          {
              "id": "860073-MLA40806310491_022020",
              "url": "http://http2.mlstatic.com/D_860073-MLA40806310491_022020-O.jpg",
              "secure_url": "https://http2.mlstatic.com/D_860073-MLA40806310491_022020-O.jpg",
              "size": "500x500",
              "max_size": "1200x1200",
              "quality": ""
          }
      ],
      "video_id": "GLSZ5G4CmBg",
      "descriptions": [],
      "accepts_mercadopago": true,
      "non_mercado_pago_payment_methods": [],
      "shipping": {
          "mode": "not_specified",
          "methods": [],
          "tags": [],
          "dimensions": null,
          "local_pick_up": true,
          "free_shipping": false,
          "logistic_type": "not_specified",
          "store_pick_up": false
      },
      "international_delivery_mode": "none",
      "seller_address": {
          "city": {
              "id": "TUxBQ0FWRTc5OTQ1",
              "name": "Avellaneda"
          },
          "state": {
              "id": "AR-B",
              "name": "Buenos Aires"
          },
          "country": {
              "id": "AR",
              "name": "Argentina"
          },
          "search_location": {
              "neighborhood": {
                  "id": "TUxBQlBJ0Tg1NDla",
                  "name": "Piñeyro"
              },
              "city": {
                  "id": "TUxBQ0FWRTc5OTQ1",
                  "name": "Avellaneda"
              },
              "state": {
                  "id": "TUxBUEdSQXJlMDNm",
                  "name": "Bs.As. G.B.A. Sur"
              }
          },
          "id": 1169421181
      },
      "seller_contact": null,
      "location": {},
      "coverage_areas": [],
      "attributes": [
          {
              "id": "BRAND",
              "name": "Marca",
              "value_id": "5202834",
              "value_name": "Böron",
              "value_struct": null,
              "values": [
                  {
                      "id": "5202834",
                      "name": "Böron",
                      "struct": null
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "GTIN",
              "name": "Código universal de producto",
              "value_id": null,
              "value_name": "883652856078",
              "value_struct": null,
              "values": [
                  {
                      "id": null,
                      "name": "883652856078",
                      "struct": null
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "HEIGHT",
              "name": "Altura",
              "value_id": "4525517",
              "value_name": "102 cm",
              "value_struct": {
                  "number": 102,
                  "unit": "cm"
              },
              "values": [
                  {
                      "id": "4525517",
                      "name": "102 cm",
                      "struct": {
                          "number": 102,
                          "unit": "cm"
                      }
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "IS_FOLDABLE",
              "name": "Es plegable",
              "value_id": "242085",
              "value_name": "Sí",
              "value_struct": null,
              "values": [
                  {
                      "id": "242085",
                      "name": "Sí",
                      "struct": null
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "ITEM_CONDITION",
              "name": "Condición del ítem",
              "value_id": "2230284",
              "value_name": "Nuevo",
              "value_struct": null,
              "values": [
                  {
                      "id": "2230284",
                      "name": "Nuevo",
                      "struct": null
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "MATERIAL",
              "name": "Material",
              "value_id": "4837600",
              "value_name": "Acero",
              "value_struct": null,
              "values": [
                  {
                      "id": "4837600",
                      "name": "Acero",
                      "struct": null
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "MAX_WEIGHT_SUPPORT",
              "name": "Soporte de peso máximo",
              "value_id": null,
              "value_name": "95 kg",
              "value_struct": {
                  "number": 95,
                  "unit": "kg"
              },
              "values": [
                  {
                      "id": null,
                      "name": "95 kg",
                      "struct": {
                          "number": 95,
                          "unit": "kg"
                      }
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "MODEL",
              "name": "Modelo",
              "value_id": "6704622",
              "value_name": "Power Cart",
              "value_struct": null,
              "values": [
                  {
                      "id": "6704622",
                      "name": "Power Cart",
                      "struct": null
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "SELLER_SKU",
              "name": "SKU",
              "value_id": null,
              "value_name": "1030018",
              "value_struct": null,
              "values": [
                  {
                      "id": null,
                      "name": "1030018",
                      "struct": null
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          },
          {
              "id": "WIDTH",
              "name": "Ancho",
              "value_id": null,
              "value_name": "42 cm",
              "value_struct": {
                  "number": 42,
                  "unit": "cm"
              },
              "values": [
                  {
                      "id": null,
                      "name": "42 cm",
                      "struct": {
                          "number": 42,
                          "unit": "cm"
                      }
                  }
              ],
              "attribute_group_id": "OTHERS",
              "attribute_group_name": "Otros"
          }
      ],
      "warnings": [],
      "listing_source": "",
      "variations": [],
      "status": "active",
      "sub_status": [],
      "tags": [
          "brand_verified",
          "good_quality_picture",
          "good_quality_thumbnail",
          "immediate_payment"
      ],
      "warranty": "Sin garantía",
      "catalog_product_id": "MLA14215630",
      "domain_id": "MLA-HAND_TRUCKS",
      "parent_item_id": null,
      "differential_pricing": null,
      "deal_ids": [
          "MLA7156"
      ],
      "automatic_relist": false,
      "date_created": "2019-05-09T20:31:50.000Z",
      "last_updated": "2022-08-03T20:48:54.000Z",
      "health": 1,
      "catalog_listing": false,
      "channels": [
          "marketplace",
          "mshops"
      ]
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchDetailProduct('MLA785561286')).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchDetailProduct('MLA785561286')).rejects.toThrow(errorMessage);
  });
});

describe('fetchDescriptionProductSearch', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      "text": "",
      "plain_text": "::: QUE INCLUYE :::\n\nComprando esta publicación obtienes un POWER CAR BÖRON\n\nDescripción:\n\nCarro plegable de acero y base de aluminio\n\nRuedas con rulemanes para una conducción suave y ágil.\nSe puede expandrir hasta 102cm de altura.\nSe pliega hasta llegar a 5,7 cm de espesor.\nConducción suave y controlada.\nManija de bloqueo y desbloqueo con una mano.\nSistema de Embalaje Seguro con cordón elástico y amarres que fijan la carga lo que permite mayor maniobrabilidad.\n\n_________________________________________\n\n::: PINTURERÍA OGUS :::\n\nSomos Mercado Líder Platinum, uno de los mejores vendedores de la plataforma por nuestra trayectoria y experiencia en el rubro.\n\n_________________________________________\n\n::: MEDIOS DE ENVÍO :::\n\n• Envíos a todo el País a través de Mercado Envíos\n• Si realizaste tu compra con MERCADO ENVÍOS NO PODEMOS CAMBIAR, AGREGAR Y/O MODIFICAR NINGÚN DATO DE ENVIÓ. Importante!: No es necesario que nos pases la dirección por acá, ya la tomo el sistema.\n• MERCADO ENVÍOS FLEX: Los envíos por flex realizan de 16 a 22 hs.\n• MERCADO ENVÍOS: Los envíos se despachan por Correo Argentino\n• ENVÍOS POR EXPRESO: Sin cargo hasta el expreso, desde allí el costo corre por cuenta del comprador hasta el destino.\n\n_________________________________________\n\n::: FACTURACIÓN :::\n\n• Contamos con FACTURACIÓN electrónica SIN COSTO extra\n• Nuestros precios publicados incluyen IVA\n• Para tu mayor comodidad y el cuidado del medio ambiente todas tus compras se ingresan en una sola factura\n• Podemos emitir Factura A si el comprador lo requiere. De generarse percepciones las mismas deberán ser abonadas en la sucursal al momento del retiro o a través de Mercado Pago en los casos de envío a domicilio\n_________________________________________\n\n::: HORARIOS DE ATENCIÓN :::\n\n• Responderemos a tus pregunta de lunes a viernes de 9 a 18 hs\n\n_________________________________________\n\n::: GARANTÍA :::\n\n• Nuestros productos son 100% originales\n• GARANTÍA contra defectos de fábrica\n_________________________________________\n\n::: COMPRA PROTEGIDA :::\n\nCon el programa de Compra Protegida de Mercado Libre, tu dinero está seguro en cada momento con nosotros\n__________________________________________\n\n::: MÁS RAZONES PARA ELEGIRNOS :::\n\n• Somos Mercadolider Platinum, uno de los mejores vendedores en Mercado Libre por nuestra excelente calidad de productos y atención\n• Contamos con una AMPLIA VARIEDAD DE PRODUCTOS a los MEJORES PRECIOS del mercado\n• Brindamos ATENCIÓN PERSONALIZADA ofreciéndote siempre el mejor producto\n_________________________________________\n\n::: ¿CÓMO COMPRAR FÁCIL Y RÁPIDO? :::\n\n1) Seleccionás tu producto y la cantidad que querés comprar\n2) Una vez que hayas resuelto todas tus dudas das clic en el botón \"COMPRAR\"\n3) Si no realizás el pago de inmediato, revisá tu correo, MercadoLibre te enviará un e-mail con instrucciones de pago\n4) Realizás tu pago y esperás la acreditación del mismo\n5) Se inicia el proceso de envío y esperás hasta que llegue a tu domicilio\n6) Calificás tu experiencia de compra con nosotros",
      "last_updated": "2021-10-26T12:09:42.000Z",
      "date_created": "2019-05-09T20:31:50.000Z",
      "snapshot": {
          "url": "http://descriptions.mlstatic.com/D-MLA785561286.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0",
          "width": 0,
          "height": 0,
          "status": ""
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchDescriptionProduct('MLA785561286')).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchDescriptionProduct('MLA785561286')).rejects.toThrow(errorMessage);
  });
});