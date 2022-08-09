import axios from 'axios';
import { fetchData } from '../services/search';

jest.mock('axios');

describe('fetchDataSearch', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      "site_id": "MLA",
      "country_default_time_zone": "GMT-03:00",
      "query": "mesas",
      "paging": {
          "total": 87875,
          "primary_results": 1000,
          "offset": 0,
          "limit": 4
      },
      "results": [
          {
              "id": "MLA833437316",
              "site_id": "MLA",
              "title": "Mesa Comedor 120 Escandinava Nordica Madera ",
              "seller": {
                  "id": 241894006,
                  "permalink": "http://perfil.mercadolibre.com.ar/NORDICOMUEBLES",
                  "registration_date": "2017-01-24T17:50:41.000-04:00",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "tags": [
                      "normal",
                      "eshop",
                      "credits_profile",
                      "messages_as_seller"
                  ],
                  "eshop": {
                      "seller": 241894006,
                      "eshop_rubro": null,
                      "eshop_id": 245729,
                      "nick_name": "NORDICOMUEBLES",
                      "site_id": "MLA",
                      "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/241894006v49494f.png",
                      "eshop_status_id": 2,
                      "eshop_experience": 0,
                      "eshop_locations": []
                  },
                  "seller_reputation": {
                      "power_seller_status": "platinum",
                      "level_id": "5_green",
                      "metrics": {
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0.0067,
                              "value": 3
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 2
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0714,
                              "value": 2
                          },
                          "sales": {
                              "period": "60 days",
                              "completed": 418
                          }
                      },
                      "transactions": {
                          "canceled": 171,
                          "period": "historic",
                          "total": 3025,
                          "ratings": {
                              "negative": 0.01,
                              "neutral": 0.04,
                              "positive": 0.95
                          },
                          "completed": 2854
                      }
                  }
              },
              "price": 15390,
              "prices": {
                  "id": "MLA833437316",
                  "prices": [
                      {
                          "id": "80",
                          "type": "standard",
                          "amount": 15390,
                          "regular_amount": null,
                          "currency_id": "ARS",
                          "last_updated": "2022-08-08T15:15:37Z",
                          "conditions": {
                              "context_restrictions": [],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "exchange_rate_context": "DEFAULT",
                          "metadata": {}
                      }
                  ],
                  "presentation": {
                      "display_currency": "ARS"
                  },
                  "payment_method_prices": [],
                  "reference_prices": [
                      {
                          "id": "77",
                          "type": "min_standard",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "amount": 6904.32,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-07-01T04:14:03Z"
                      },
                      {
                          "id": "78",
                          "type": "was",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": "2022-07-01T04:14:03Z",
                              "end_time": "2022-07-08T04:14:03Z",
                              "eligible": true
                          },
                          "amount": 11490,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-07-01T04:14:03Z"
                      }
                  ],
                  "purchase_discounts": []
              },
              "sale_price": null,
              "currency_id": "ARS",
              "available_quantity": 1,
              "sold_quantity": 500,
              "buying_mode": "buy_it_now",
              "listing_type_id": "gold_special",
              "stop_time": "2041-06-02T17:28:37.000Z",
              "condition": "new",
              "permalink": "https://articulo.mercadolibre.com.ar/MLA-833437316-mesa-comedor-120-escandinava-nordica-madera-_JM",
              "thumbnail": "http://http2.mlstatic.com/D_937125-MLA46134984850_052021-I.jpg",
              "thumbnail_id": "937125-MLA46134984850_052021",
              "accepts_mercadopago": true,
              "installments": {
                  "quantity": 12,
                  "amount": 2272.72,
                  "rate": 77.21,
                  "currency_id": "ARS"
              },
              "address": {
                  "state_id": "AR-B",
                  "state_name": "Buenos Aires",
                  "city_id": "TUxBQ1FVSWI1MzY",
                  "city_name": "Quilmes"
              },
              "shipping": {
                  "free_shipping": false,
                  "mode": "not_specified",
                  "tags": [],
                  "logistic_type": "not_specified",
                  "store_pick_up": false
              },
              "seller_address": {
                  "id": "",
                  "comment": "",
                  "address_line": "",
                  "zip_code": "",
                  "country": {
                      "id": "AR",
                      "name": "Argentina"
                  },
                  "state": {
                      "id": "AR-B",
                      "name": "Buenos Aires"
                  },
                  "city": {
                      "id": "TUxBQ1FVSWI1MzY",
                      "name": "Quilmes"
                  },
                  "latitude": "",
                  "longitude": ""
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_name": "Nordico Muebles",
                      "attribute_group_name": "Otros",
                      "value_id": null,
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "Nordico Muebles",
                              "struct": null,
                              "source": 6808261514773724
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "source": 6808261514773724
                  },
                  {
                      "value_name": "Nuevo",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Nuevo",
                              "struct": null,
                              "source": 6808261514773724
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Otros",
                      "id": "ITEM_CONDITION",
                      "name": "Condición del ítem",
                      "value_id": "2230284",
                      "source": 6808261514773724
                  },
                  {
                      "name": "Largo máximo",
                      "value_name": "120 cm",
                      "attribute_group_name": "Otros",
                      "source": 6808261514773724,
                      "attribute_group_id": "OTHERS",
                      "id": "MAX_LENGTH",
                      "value_id": null,
                      "value_struct": {
                          "number": 120,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "source": 6808261514773724,
                              "id": null,
                              "name": "120 cm",
                              "struct": {
                                  "number": 120,
                                  "unit": "cm"
                              }
                          }
                      ]
                  },
                  {
                      "value_name": "Escandinava",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "Escandinava",
                              "struct": null,
                              "source": 6808261514773724
                          }
                      ],
                      "source": 6808261514773724,
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": null,
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Otros"
                  }
              ],
              "original_price": null,
              "category_id": "MLA4764",
              "official_store_id": null,
              "domain_id": "MLA-DINING_TABLES",
              "catalog_product_id": null,
              "tags": [
                  "loyalty_discount_eligible",
                  "brand_verified",
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "best_seller_candidate"
              ],
              "order_backend": 1,
              "use_thumbnail_id": true,
              "offer_score": null,
              "offer_share": null,
              "match_score": null,
              "winner_item_id": null,
              "melicoin": null,
              "discounts": null
          },
          {
              "id": "MLA820329595",
              "site_id": "MLA",
              "title": "Juegos De Comedor, Mesa Fija + 4 Sillas  En Chenille Lola",
              "seller": {
                  "id": 451491407,
                  "permalink": "http://perfil.mercadolibre.com.ar/NICK+MUEBLES",
                  "registration_date": "2019-07-11T22:15:34.000-04:00",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "tags": [
                      "normal",
                      "credits_profile",
                      "mshops",
                      "messages_as_seller"
                  ],
                  "seller_reputation": {
                      "power_seller_status": "platinum",
                      "level_id": "5_green",
                      "metrics": {
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 2
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0064,
                              "value": 7
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0106,
                              "value": 4
                          },
                          "sales": {
                              "period": "60 days",
                              "completed": 924
                          }
                      },
                      "transactions": {
                          "canceled": 517,
                          "period": "historic",
                          "total": 5102,
                          "ratings": {
                              "negative": 0.07,
                              "neutral": 0.04,
                              "positive": 0.89
                          },
                          "completed": 4585
                      }
                  }
              },
              "price": 45650,
              "prices": {
                  "id": "MLA820329595",
                  "prices": [
                      {
                          "id": "39",
                          "type": "standard",
                          "amount": 45650,
                          "regular_amount": null,
                          "currency_id": "ARS",
                          "last_updated": "2022-07-29T14:35:42Z",
                          "conditions": {
                              "context_restrictions": [],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "exchange_rate_context": "DEFAULT",
                          "metadata": {}
                      }
                  ],
                  "presentation": {
                      "display_currency": "ARS"
                  },
                  "payment_method_prices": [],
                  "reference_prices": [
                      {
                          "id": "33",
                          "type": "min_standard",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "amount": 27280,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-07-04T04:12:12Z"
                      },
                      {
                          "id": "34",
                          "type": "was",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": "2022-07-04T04:12:12Z",
                              "end_time": "2022-07-11T04:12:12Z",
                              "eligible": true
                          },
                          "amount": 30000,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-07-04T04:12:12Z"
                      }
                  ],
                  "purchase_discounts": []
              },
              "sale_price": null,
              "currency_id": "ARS",
              "available_quantity": 500,
              "sold_quantity": 150,
              "buying_mode": "buy_it_now",
              "listing_type_id": "gold_special",
              "stop_time": "2039-10-12T04:00:00.000Z",
              "condition": "new",
              "permalink": "https://articulo.mercadolibre.com.ar/MLA-820329595-juegos-de-comedor-mesa-fija-4-sillas-en-chenille-lola-_JM",
              "thumbnail": "http://http2.mlstatic.com/D_917463-MLA48243142016_112021-I.jpg",
              "thumbnail_id": "917463-MLA48243142016_112021",
              "accepts_mercadopago": true,
              "installments": {
                  "quantity": 12,
                  "amount": 6741.36,
                  "rate": 77.21,
                  "currency_id": "ARS"
              },
              "address": {
                  "state_id": "AR-B",
                  "state_name": "Buenos Aires",
                  "city_id": null,
                  "city_name": "Pablo Podestá"
              },
              "shipping": {
                  "free_shipping": false,
                  "mode": "not_specified",
                  "tags": [],
                  "logistic_type": "not_specified",
                  "store_pick_up": false
              },
              "seller_address": {
                  "id": "",
                  "comment": "",
                  "address_line": "",
                  "zip_code": "",
                  "country": {
                      "id": "AR",
                      "name": "Argentina"
                  },
                  "state": {
                      "id": "AR-B",
                      "name": "Buenos Aires"
                  },
                  "city": {
                      "id": null,
                      "name": "Pablo Podestá"
                  },
                  "latitude": "",
                  "longitude": ""
              },
              "attributes": [
                  {
                      "value_id": null,
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "Nick Muebles",
                              "struct": null,
                              "source": 1505
                          }
                      ],
                      "attribute_group_name": "Otros",
                      "id": "BRAND",
                      "name": "Marca",
                      "source": 1505,
                      "value_name": "Nick Muebles",
                      "attribute_group_id": "OTHERS"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condición del ítem",
                      "value_id": "2230284",
                      "values": [
                          {
                              "struct": null,
                              "source": 8342579661593500,
                              "id": "2230284",
                              "name": "Nuevo"
                          }
                      ],
                      "source": 8342579661593500,
                      "value_name": "Nuevo",
                      "value_struct": null,
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Otros"
                  },
                  {
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Otros",
                      "source": 8342579661593500,
                      "value_id": null,
                      "value_name": "Rectangular",
                      "value_struct": null,
                      "values": [
                          {
                              "struct": null,
                              "source": 8342579661593500,
                              "id": null,
                              "name": "Rectangular"
                          }
                      ],
                      "id": "MODEL",
                      "name": "Modelo"
                  },
                  {
                      "value_struct": {
                          "number": 140,
                          "unit": "cm"
                      },
                      "attribute_group_id": "OTHERS",
                      "id": "TABLE_LENGTH",
                      "value_name": "140 cm",
                      "values": [
                          {
                              "id": null,
                              "name": "140 cm",
                              "struct": {
                                  "number": 140,
                                  "unit": "cm"
                              },
                              "source": 8342579661593500
                          }
                      ],
                      "attribute_group_name": "Otros",
                      "source": 8342579661593500,
                      "name": "Largo de la mesa",
                      "value_id": null
                  }
              ],
              "original_price": null,
              "category_id": "MLA7149",
              "official_store_id": null,
              "domain_id": "MLA-DINING_SETS",
              "catalog_product_id": null,
              "tags": [
                  "brand_verified",
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "loyalty_discount_eligible",
                  "immediate_payment",
                  "best_seller_candidate"
              ],
              "order_backend": 2,
              "use_thumbnail_id": true,
              "offer_score": null,
              "offer_share": null,
              "match_score": null,
              "winner_item_id": null,
              "melicoin": null,
              "discounts": null
          },
          {
              "id": "MLA1120479260",
              "site_id": "MLA",
              "title": "Mesa Tulip Redonda Circular Mdf Base Metal Mate Vonne Min015",
              "seller": {
                  "id": 256788917,
                  "permalink": "http://perfil.mercadolibre.com.ar/ROBERTSGEORGEALBERT",
                  "registration_date": "2017-05-16T13:45:41.000-04:00",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "tags": [
                      "normal",
                      "eshop",
                      "mshops",
                      "credits_profile",
                      "messages_as_seller"
                  ],
                  "eshop": {
                      "seller": 256788917,
                      "eshop_rubro": null,
                      "eshop_id": 457796,
                      "nick_name": "ROBERTSGEORGEALBERT",
                      "site_id": "MLA",
                      "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/256788917v0bd00d.png",
                      "eshop_status_id": 1,
                      "eshop_experience": 0,
                      "eshop_locations": []
                  },
                  "seller_reputation": {
                      "power_seller_status": "platinum",
                      "level_id": "5_green",
                      "metrics": {
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0042,
                              "value": 6
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0769,
                              "value": 88
                          },
                          "sales": {
                              "period": "60 days",
                              "completed": 1361
                          }
                      },
                      "transactions": {
                          "canceled": 436,
                          "period": "historic",
                          "total": 8690,
                          "ratings": {
                              "negative": 0.02,
                              "neutral": 0.03,
                              "positive": 0.95
                          },
                          "completed": 8254
                      }
                  }
              },
              "price": 38478.96,
              "prices": {
                  "id": "MLA1120479260",
                  "prices": [
                      {
                          "id": "28",
                          "type": "standard",
                          "amount": 38478.96,
                          "regular_amount": null,
                          "currency_id": "ARS",
                          "last_updated": "2022-08-09T14:06:16Z",
                          "conditions": {
                              "context_restrictions": [],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "exchange_rate_context": "DEFAULT",
                          "metadata": {}
                      }
                  ],
                  "presentation": {
                      "display_currency": "ARS"
                  },
                  "payment_method_prices": [],
                  "reference_prices": [
                      {
                          "id": "23",
                          "type": "min_standard",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "amount": 21729,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-04-16T08:38:25Z"
                      },
                      {
                          "id": "24",
                          "type": "was",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": "2022-04-16T08:38:25Z",
                              "end_time": "2022-04-23T08:38:25Z",
                              "eligible": true
                          },
                          "amount": 24729,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-04-16T08:38:25Z"
                      }
                  ],
                  "purchase_discounts": []
              },
              "sale_price": null,
              "currency_id": "ARS",
              "available_quantity": 1,
              "sold_quantity": 5,
              "buying_mode": "buy_it_now",
              "listing_type_id": "gold_pro",
              "stop_time": "2042-01-19T04:00:00.000Z",
              "condition": "new",
              "permalink": "https://articulo.mercadolibre.com.ar/MLA-1120479260-mesa-tulip-redonda-circular-mdf-base-metal-mate-vonne-min015-_JM",
              "thumbnail": "http://http2.mlstatic.com/D_790528-MLA48918285198_012022-I.jpg",
              "thumbnail_id": "790528-MLA48918285198_012022",
              "accepts_mercadopago": true,
              "installments": {
                  "quantity": 12,
                  "amount": 3206.58,
                  "rate": 0,
                  "currency_id": "ARS"
              },
              "address": {
                  "state_id": "AR-U",
                  "state_name": "Chubut",
                  "city_id": null,
                  "city_name": "Esquel"
              },
              "shipping": {
                  "free_shipping": true,
                  "mode": "not_specified",
                  "tags": [],
                  "logistic_type": "not_specified",
                  "store_pick_up": false
              },
              "seller_address": {
                  "id": "",
                  "comment": "",
                  "address_line": "",
                  "zip_code": "",
                  "country": {
                      "id": "AR",
                      "name": "Argentina"
                  },
                  "state": {
                      "id": "AR-U",
                      "name": "Chubut"
                  },
                  "city": {
                      "id": null,
                      "name": "Esquel"
                  },
                  "latitude": "",
                  "longitude": ""
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "9956834",
                      "source": 2860837171021627,
                      "attribute_group_name": "Otros",
                      "value_name": "Vonne",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "9956834",
                              "name": "Vonne",
                              "struct": null,
                              "source": 2860837171021627
                          }
                      ],
                      "attribute_group_id": "OTHERS"
                  },
                  {
                      "attribute_group_name": "Otros",
                      "source": 2860837171021627,
                      "value_name": "Nuevo",
                      "value_struct": null,
                      "attribute_group_id": "OTHERS",
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Nuevo",
                              "struct": null,
                              "source": 2860837171021627
                          }
                      ],
                      "id": "ITEM_CONDITION",
                      "name": "Condición del ítem",
                      "value_id": "2230284"
                  },
                  {
                      "id": "MAX_LENGTH",
                      "value_id": "-1",
                      "value_name": null,
                      "values": [
                          {
                              "struct": null,
                              "source": 2860837171021627,
                              "id": "-1",
                              "name": null
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Otros",
                      "name": "Largo máximo",
                      "value_struct": null,
                      "source": 2860837171021627
                  },
                  {
                      "name": "Modelo",
                      "value_id": null,
                      "value_name": "MIN015",
                      "value_struct": null,
                      "attribute_group_id": "OTHERS",
                      "id": "MODEL",
                      "values": [
                          {
                              "id": null,
                              "name": "MIN015",
                              "struct": null,
                              "source": 2860837171021627
                          }
                      ],
                      "attribute_group_name": "Otros",
                      "source": 2860837171021627
                  }
              ],
              "differential_pricing": {
                  "id": 35713279
              },
              "original_price": null,
              "category_id": "MLA4764",
              "official_store_id": null,
              "domain_id": "MLA-DINING_TABLES",
              "catalog_product_id": null,
              "tags": [
                  "ahora-12",
                  "extended_warranty_eligible",
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "mshops_ahora-12",
                  "immediate_payment"
              ],
              "order_backend": 3,
              "use_thumbnail_id": true,
              "offer_score": null,
              "offer_share": null,
              "match_score": null,
              "winner_item_id": null,
              "melicoin": null,
              "discounts": null
          },
          {
              "id": "MLA1115207131",
              "site_id": "MLA",
              "title": "Mesa Y Sillas / Juego De Comedor / Juego De Mesa 120 Madera",
              "seller": {
                  "id": 61898035,
                  "permalink": "http://perfil.mercadolibre.com.ar/TENDEDEROS+GUSTAVO",
                  "registration_date": "2011-07-03T22:34:52.000-04:00",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "tags": [
                      "normal",
                      "credits_profile",
                      "mshops",
                      "messages_as_seller"
                  ],
                  "seller_reputation": {
                      "power_seller_status": "platinum",
                      "level_id": "5_green",
                      "metrics": {
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 1
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.009,
                              "value": 5
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.023,
                              "value": 8
                          },
                          "sales": {
                              "period": "60 days",
                              "completed": 515
                          }
                      },
                      "transactions": {
                          "canceled": 251,
                          "period": "historic",
                          "total": 4414,
                          "ratings": {
                              "negative": 0.03,
                              "neutral": 0.05,
                              "positive": 0.92
                          },
                          "completed": 4163
                      }
                  }
              },
              "price": 29000,
              "prices": {
                  "id": "MLA1115207131",
                  "prices": [
                      {
                          "id": "62",
                          "type": "standard",
                          "amount": 29000,
                          "regular_amount": null,
                          "currency_id": "ARS",
                          "last_updated": "2022-08-03T17:12:23Z",
                          "conditions": {
                              "context_restrictions": [],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "exchange_rate_context": "DEFAULT",
                          "metadata": {}
                      }
                  ],
                  "presentation": {
                      "display_currency": "ARS"
                  },
                  "payment_method_prices": [],
                  "reference_prices": [
                      {
                          "id": "59",
                          "type": "min_standard",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": null,
                              "end_time": null,
                              "eligible": true
                          },
                          "amount": 18000,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-06-28T04:12:59Z"
                      },
                      {
                          "id": "60",
                          "type": "was",
                          "conditions": {
                              "context_restrictions": [
                                  "channel_marketplace"
                              ],
                              "start_time": "2022-06-28T04:12:59Z",
                              "end_time": "2022-07-05T04:12:59Z",
                              "eligible": true
                          },
                          "amount": 21000,
                          "currency_id": "ARS",
                          "exchange_rate_context": "DEFAULT",
                          "tags": [],
                          "last_updated": "2022-06-28T04:12:59Z"
                      }
                  ],
                  "purchase_discounts": []
              },
              "sale_price": null,
              "currency_id": "ARS",
              "available_quantity": 1,
              "sold_quantity": 50,
              "buying_mode": "buy_it_now",
              "listing_type_id": "gold_special",
              "stop_time": "2041-12-03T04:00:00.000Z",
              "condition": "new",
              "permalink": "https://articulo.mercadolibre.com.ar/MLA-1115207131-mesa-y-sillas-juego-de-comedor-juego-de-mesa-120-madera-_JM",
              "thumbnail": "http://http2.mlstatic.com/D_604815-MLA50936003059_072022-I.jpg",
              "thumbnail_id": "604815-MLA50936003059_072022",
              "accepts_mercadopago": true,
              "installments": {
                  "quantity": 12,
                  "amount": 4282.58,
                  "rate": 77.21,
                  "currency_id": "ARS"
              },
              "address": {
                  "state_id": "AR-B",
                  "state_name": "Buenos Aires",
                  "city_id": "TUxBQ0lUVTNjNDFm",
                  "city_name": "Ituzaingó"
              },
              "shipping": {
                  "free_shipping": false,
                  "mode": "not_specified",
                  "tags": [],
                  "logistic_type": "not_specified",
                  "store_pick_up": false
              },
              "seller_address": {
                  "id": "",
                  "comment": "",
                  "address_line": "",
                  "zip_code": "",
                  "country": {
                      "id": "AR",
                      "name": "Argentina"
                  },
                  "state": {
                      "id": "AR-B",
                      "name": "Buenos Aires"
                  },
                  "city": {
                      "id": "TUxBQ0lUVTNjNDFm",
                      "name": "Ituzaingó"
                  },
                  "latitude": "",
                  "longitude": ""
              },
              "attributes": [
                  {
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "TENDEDEROS GUSTAVO",
                              "struct": null,
                              "source": 3376461333454861
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "name": "Marca",
                      "value_name": "TENDEDEROS GUSTAVO",
                      "attribute_group_name": "Otros",
                      "source": 3376461333454861,
                      "id": "BRAND",
                      "value_id": null
                  },
                  {
                      "value_id": "2230284",
                      "source": 1505,
                      "id": "ITEM_CONDITION",
                      "value_name": "Nuevo",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Nuevo",
                              "struct": null,
                              "source": 1505
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Otros",
                      "name": "Condición del ítem"
                  },
                  {
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "SEIS FAJAS",
                              "struct": null,
                              "source": 3376461333454861
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "name": "Modelo",
                      "value_id": null,
                      "value_name": "SEIS FAJAS",
                      "attribute_group_name": "Otros",
                      "source": 3376461333454861,
                      "id": "MODEL"
                  },
                  {
                      "name": "Largo de la mesa",
                      "value_id": null,
                      "value_struct": {
                          "number": 117,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "117 cm",
                              "struct": {
                                  "number": 117,
                                  "unit": "cm"
                              },
                              "source": 3376461333454861
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "source": 3376461333454861,
                      "id": "TABLE_LENGTH",
                      "attribute_group_name": "Otros",
                      "value_name": "117 cm"
                  }
              ],
              "original_price": null,
              "category_id": "MLA7149",
              "official_store_id": null,
              "domain_id": "MLA-DINING_SETS",
              "catalog_product_id": null,
              "tags": [
                  "good_quality_thumbnail",
                  "loyalty_discount_eligible",
                  "good_quality_picture",
                  "immediate_payment",
                  "best_seller_candidate"
              ],
              "order_backend": 4,
              "use_thumbnail_id": true,
              "offer_score": null,
              "offer_share": null,
              "match_score": null,
              "winner_item_id": null,
              "melicoin": null,
              "discounts": null
          }
      ],
      "sort": {
          "id": "relevance",
          "name": "More relevant"
      },
      "available_sorts": [
          {
              "id": "price_asc",
              "name": "Lower price"
          },
          {
              "id": "price_desc",
              "name": "Higher price"
          }
      ],
      "filters": [
          {
              "id": "category",
              "name": "Categories",
              "type": "text",
              "values": [
                  {
                      "id": "MLA436380",
                      "name": "Muebles para el Hogar",
                      "path_from_root": [
                          {
                              "id": "MLA1574",
                              "name": "Hogar, Muebles y Jardín"
                          },
                          {
                              "id": "MLA436380",
                              "name": "Muebles para el Hogar"
                          }
                      ]
                  }
              ]
          }
      ],
      "available_filters": [
          {
              "id": "category",
              "name": "Categories",
              "type": "text",
              "values": [
                  {
                      "id": "MLA454690",
                      "name": "Mobiliario para Cocinas",
                      "results": 19922
                  },
                  {
                      "id": "MLA436392",
                      "name": "Juegos y Sets de Muebles",
                      "results": 13652
                  },
                  {
                      "id": "MLA436384",
                      "name": "Mesas Ratonas y Auxiliares",
                      "results": 23675
                  },
                  {
                      "id": "MLA370415",
                      "name": "Mesas de Luz",
                      "results": 9590
                  },
                  {
                      "id": "MLA4754",
                      "name": "Muebles para TV",
                      "results": 5832
                  },
                  {
                      "id": "MLA436411",
                      "name": "Mesas de Jardín",
                      "results": 3888
                  },
                  {
                      "id": "MLA31040",
                      "name": "Mesas de Computación",
                      "results": 1930
                  },
                  {
                      "id": "MLA30991",
                      "name": "Escritorios",
                      "results": 1638
                  },
                  {
                      "id": "MLA411493",
                      "name": "Camas, Bases y Respaldos",
                      "results": 1188
                  },
                  {
                      "id": "MLA436389",
                      "name": "Sillas, Sillones y Banquetas",
                      "results": 936
                  },
                  {
                      "id": "MLA455182",
                      "name": "Accesorios y Repuestos",
                      "results": 919
                  },
                  {
                      "id": "MLA436382",
                      "name": "Muebles de Guardado",
                      "results": 900
                  },
                  {
                      "id": "MLA431275",
                      "name": "Cubos y Repisas",
                      "results": 288
                  },
                  {
                      "id": "MLA414036",
                      "name": "Bares",
                      "results": 216
                  },
                  {
                      "id": "MLA454704",
                      "name": "Muebles para Baño",
                      "results": 198
                  },
                  {
                      "id": "MLA4765",
                      "name": "Bibliotecas y Estanterías",
                      "results": 180
                  },
                  {
                      "id": "MLA412564",
                      "name": "Tocadores",
                      "results": 144
                  },
                  {
                      "id": "MLA436412",
                      "name": "Bancos de Jardín",
                      "results": 126
                  },
                  {
                      "id": "MLA412072",
                      "name": "Pupitres",
                      "results": 54
                  },
                  {
                      "id": "MLA4837",
                      "name": "Cunas, Catres y Moisés",
                      "results": 36
                  },
                  {
                      "id": "MLA1623",
                      "name": "Otros",
                      "results": 2556
                  }
              ]
          },
          {
              "id": "official_store",
              "name": "Tiendas oficiales",
              "type": "text",
              "values": [
                  {
                      "id": "all",
                      "name": "Todas las tiendas oficiales",
                      "results": 1466
                  },
                  {
                      "id": "2947",
                      "name": "Mas Que Sillas",
                      "results": 130
                  },
                  {
                      "id": "201",
                      "name": "La Font",
                      "results": 470
                  },
                  {
                      "id": "2735",
                      "name": "Tienda Rossi",
                      "results": 109
                  },
                  {
                      "id": "245",
                      "name": "Pinturerias MM",
                      "results": 19
                  }
              ]
          },
          {
              "id": "discount",
              "name": "Descuentos",
              "type": "number",
              "values": [
                  {
                      "id": "5-100",
                      "name": "Desde 5% OFF",
                      "results": 2775
                  },
                  {
                      "id": "10-100",
                      "name": "Desde 10% OFF",
                      "results": 2199
                  },
                  {
                      "id": "15-100",
                      "name": "Desde 15% OFF",
                      "results": 417
                  },
                  {
                      "id": "20-100",
                      "name": "Desde 20% OFF",
                      "results": 200
                  },
                  {
                      "id": "25-100",
                      "name": "Desde 25% OFF",
                      "results": 54
                  },
                  {
                      "id": "30-100",
                      "name": "Desde 30% OFF",
                      "results": 36
                  }
              ]
          },
          {
              "id": "state",
              "name": "Location",
              "type": "text",
              "values": [
                  {
                      "id": "TUxBUENBUGw3M2E1",
                      "name": "Capital Federal",
                      "results": 29411
                  },
                  {
                      "id": "TUxBUEdSQWVmNTVm",
                      "name": "Bs.As. G.B.A. Oeste",
                      "results": 16012
                  },
                  {
                      "id": "TUxBUEdSQWU4ZDkz",
                      "name": "Bs.As. G.B.A. Norte",
                      "results": 14000
                  },
                  {
                      "id": "TUxBUEdSQXJlMDNm",
                      "name": "Bs.As. G.B.A. Sur",
                      "results": 12302
                  },
                  {
                      "id": "TUxBUFpPTmFpbnRl",
                      "name": "Buenos Aires Interior",
                      "results": 3960
                  },
                  {
                      "id": "TUxBUFNBTmU5Nzk2",
                      "name": "Santa Fe",
                      "results": 2774
                  },
                  {
                      "id": "TUxBUENPUmFkZGIw",
                      "name": "Córdoba",
                      "results": 2520
                  },
                  {
                      "id": "TUxBUENPU2ExMmFkMw",
                      "name": "Bs.As. Costa Atlántica",
                      "results": 703
                  },
                  {
                      "id": "TUxBUE1FTmE5OWQ4",
                      "name": "Mendoza",
                      "results": 450
                  },
                  {
                      "id": "TUxBUEVOVHMzNTdm",
                      "name": "Entre Ríos",
                      "results": 432
                  },
                  {
                      "id": "TUxBUENIQW8xMTNhOA",
                      "name": "Chaco",
                      "results": 414
                  },
                  {
                      "id": "TUxBUENPUnM5MjI0",
                      "name": "Corrientes",
                      "results": 334
                  },
                  {
                      "id": "TUxBUE1JU3MzNjIx",
                      "name": "Misiones",
                      "results": 306
                  },
                  {
                      "id": "TUxBUENIVXQxNDM1MQ",
                      "name": "Chubut",
                      "results": 199
                  },
                  {
                      "id": "TUxBUFRVQ244NmM3",
                      "name": "Tucumán",
                      "results": 180
                  },
                  {
                      "id": "TUxBUFLNT29iZmZm",
                      "name": "Río Negro",
                      "results": 162
                  },
                  {
                      "id": "TUxBUE5FVW4xMzMzNQ",
                      "name": "Neuquén",
                      "results": 144
                  },
                  {
                      "id": "TUxBUFNBTGFjMTJi",
                      "name": "Salta",
                      "results": 126
                  },
                  {
                      "id": "TUxBUEZPUmE1OTk5",
                      "name": "Formosa",
                      "results": 90
                  },
                  {
                      "id": "TUxBUFNBTm9lOTlk",
                      "name": "Santiago del Estero",
                      "results": 90
                  },
                  {
                      "id": "TUxBUENBVGFiY2Fm",
                      "name": "Catamarca",
                      "results": 72
                  },
                  {
                      "id": "TUxBUEpVSnk3YmUz",
                      "name": "Jujuy",
                      "results": 54
                  },
                  {
                      "id": "TUxBUExBWmEyNzY0",
                      "name": "La Rioja",
                      "results": 54
                  },
                  {
                      "id": "TUxBUFNBTm5lYjU4",
                      "name": "San Juan",
                      "results": 54
                  },
                  {
                      "id": "TUxBUFNBTno3ZmY5",
                      "name": "Santa Cruz",
                      "results": 54
                  },
                  {
                      "id": "TUxBUExBWmE1OWMy",
                      "name": "La Pampa",
                      "results": 36
                  },
                  {
                      "id": "TUxBUFNBTnM0ZTcz",
                      "name": "San Luis",
                      "results": 36
                  }
              ]
          },
          {
              "id": "price",
              "name": "Precio",
              "type": "range",
              "values": [
                  {
                      "id": "*-10000.0",
                      "name": "Up to $10.000",
                      "results": 20985
                  },
                  {
                      "id": "10000.0-35000.0",
                      "name": "$10.000 to $35.000",
                      "results": 33468
                  },
                  {
                      "id": "35000.0-*",
                      "name": "More than $35.000",
                      "results": 33415
                  }
              ]
          },
          {
              "id": "accepts_mercadopago",
              "name": "MercadoPago filter",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "With MercadoPago",
                      "results": 87868
                  }
              ]
          },
          {
              "id": "installments",
              "name": "Pago",
              "type": "text",
              "values": [
                  {
                      "id": "yes",
                      "name": "Installments",
                      "results": 86230
                  },
                  {
                      "id": "no_interest",
                      "name": "Sin interés",
                      "results": 19672
                  }
              ]
          },
          {
              "id": "shipping",
              "name": "Envío",
              "type": "text",
              "values": [
                  {
                      "id": "mercadoenvios",
                      "name": "Mercado Envíos",
                      "results": 12693
                  },
                  {
                      "id": "fulfillment",
                      "name": "Full",
                      "results": 22
                  }
              ]
          },
          {
              "id": "power_seller",
              "name": "Seller quality filter",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "Best sellers",
                      "results": 23607
                  }
              ]
          },
          {
              "id": "since",
              "name": "Auction start date filter",
              "type": "text",
              "values": [
                  {
                      "id": "today",
                      "name": "Publicados hoy",
                      "results": 324
                  }
              ]
          },
          {
              "id": "until",
              "name": "Auction stop filter",
              "type": "text",
              "values": [
                  {
                      "id": "today",
                      "name": "Ending today",
                      "results": 126
                  }
              ]
          },
          {
              "id": "has_video",
              "name": "Video publications filter",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "Publications with video",
                      "results": 4692
                  }
              ]
          },
          {
              "id": "has_pictures",
              "name": "Items with images filter",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "With pictures",
                      "results": 87868
                  }
              ]
          },
          {
              "id": "price_campaign_id",
              "name": "Campaña",
              "type": "number",
              "values": [
                  {
                      "id": "MLA1909",
                      "name": "MLA1909",
                      "results": 2
                  }
              ]
          },
          {
              "id": "shipping_cost",
              "name": "Costo de envío",
              "type": "text",
              "values": [
                  {
                      "id": "free",
                      "name": "Gratis",
                      "results": 8056
                  }
              ]
          },
          {
              "id": "ITEM_CONDITION",
              "name": "Condición",
              "type": "STRING",
              "values": [
                  {
                      "id": "2230284",
                      "name": "Nuevo",
                      "results": 55930
                  },
                  {
                      "id": "2230581",
                      "name": "Usado",
                      "results": 28050
                  },
                  {
                      "id": "2230582",
                      "name": "Reacondicionado",
                      "results": 510
                  }
              ]
          }
      ]
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData('mesas')).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData('mesas')).rejects.toThrow(errorMessage);
  });
});