const produtos = {
  bebidas: [
    { nome: "Coca-Cola 2L", preco: 12.99, img: "https://static.clubeextra.com.br/img/uploads/1/1/25295001.png", quantidade: "2L" },
    { nome: "Pepsi 2L", preco: 11.49, img: "https://static.paodeacucar.com/img/uploads/1/658/26944658.jpg", quantidade: "2L" },
    { nome: "Guaraná Antarctica 1.5L", preco: 6.19, img: "https://static.clubeextra.com.br/img/uploads/1/16/33149016.jpg", quantidade: "1.5L" },
    { nome: "Fanta Uva 2L", preco: 8.29, img: "https://static.paodeacucar.com/img/uploads/1/295/24981295.png", quantidade: "2L" },
    { nome: "Suco Natural 1L", preco: 12.99, img: "https://www.natone.com.br/wp-content/uploads/2024/09/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_GARRAFA_RECICLAVEL_-_NATURAL_ONE-01.webp", quantidade: "1L" },
    { nome: "Energético Red Bull 473ml", preco: 16.99, img: "https://www.oxxo.com.br/ccstore/v1/images/?source=/file/v219502384197085265/products/96.product_96_energeticoredbulllata473ml_3737.jpg&height=100&width=100&outputFormat=JPEG", quantidade: "473ml" },
    { nome: "Água Mineral 500ml", preco: 4.50, img: "https://imgs.extra.com.br/1564306560/1xg.jpg?imwidth=500", quantidade: "500ml" },
    { nome: "Guaraná Antarctica 2L", preco: 11.50, img: "https://imgs.extra.com.br/1505923720/1xg.jpg?imwidth=500", quantidade: "2L" },
    { nome: "Pepsi Twist 2L", preco: 10.49, img: "https://static.paodeacucar.com/img/uploads/1/576/32844576.jpg", quantidade: "2L" },
    { nome: "Schin 2L", preco: 9.99, img: "https://www.sondadelivery.com.br/img.aspx/sku/85880/530/85880.jpg", quantidade: "2L" },
    { nome: "Coca-Cola Zero 2L", preco: 13.99, img: "https://andinacocacola.vtexassets.com/arquivos/ids/158596-1600-auto?v=638703090705600000&width=1600&height=auto&aspect=true", quantidade: "2L" },
    { nome: "Fanta Laranja 2L", preco: 8.79, img: "https://imgs.extra.com.br/1506139607/1xg.jpg?imwidth=500", quantidade: "2L" },
    { nome: "Sukita Laranja 2L", preco: 8.49, img: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1880-refrigerante-sukita-laranja-pet-2l.20230901121149.png?s=a28929f3bee71a32e54a55c883fb6f07", quantidade: "2L" },
    { nome: "Coca-Cola Diet 1.5L", preco: 9.50, img: "https://static.paodeacucar.com/img/uploads/1/37/28314037.png", quantidade: "1.5L" },
    { nome: "ÁGUA CRYSTAL 500Ml", preco: 3.00, img: "https://images.tcdn.com.br/img/img_prod/858764/agua_crystal_500ml_gas_c_12_127_1_a126e0b536ba991756801f870daaff60.jpg", quantidade: "500ml" }
  ],
  matinais: [
    { nome: "Leite Integral UHT Ninho 1L", preco: 6.50, img: "https://a-static.mlcdn.com.br/186x140/leite-integral-uht-ninho-1l/vandocesesalgados/80bd32041e7511ec836a4201ac185013/434c6c12b51bb9e8a21e849b3960e57b.jpeg", quantidade: "1L" },
    { nome: "Cereal Matinal Ultra Flakes QUALITÁ Caixa 300g", preco: 8.20, img: "https://static.clubeextra.com.br/img/uploads/1/752/33142752.png", quantidade: "300g" },
    { nome: "Pão de Forma Panco Premium Pacote 500g", preco: 10.30, img: "https://static.paodeacucar.com/img/uploads/1/354/607354.png", quantidade: "500g" },
    { nome: "Manteiga Itambé Extra com Sal 200g", preco: 10.99, img: "https://superprix.vteximg.com.br/arquivos/ids/173188-600-600/Manteiga-Itambe-Extra-com-Sal-200g.png?v=636136139850600000", quantidade: "200g" },
    { nome: "Geleia De Morango Artesanal Myberries 300g", preco: 14.99, img: "https://casaflora.vtexassets.com/arquivos/ids/157749-1200-auto?v=637624122224670000&width=1200&height=auto&aspect=true", quantidade: "300g" },
    { nome: "Queijo Minas Frescal 500g", preco: 20.50, img: "https://www.laticiniosportoalegre.com.br/.imaging/flex/crop/974x974/dam/International-Subsidiaries/LPA/Organiza--o/31761-MOCKUP--NOVA-LEGISLACAO---QUEIJO-MINAS-FRESCAL-500G_AF01.png", quantidade: "500g" },
    { nome: "Presunto Cozido sem capa de gordura", preco: 17.99, img: "https://ibassets.com.br/ib.item.image.large/l-8584eaf09eec424eab1f950c44f53b15.jpeg  ", quantidade: "200g" },
    { nome: "Ovos Branco Extra QUALITÁ Bandeja 12 Unidades", preco: 18.00, img: "https://static.paodeacucar.com/img/uploads/1/462/616462.png", quantidade: "12 unidades" },
    { nome: "Achocolatado Nescau 400 Gramas - Nestle", preco: 10.90, img: "https://a-static.mlcdn.com.br/800x560/achocolatado-nescau-400-gramas-nestle/oliststore/mglber125dermlfu/edb1be8d98e05a2513f374d3d7b69617.jpeg", quantidade: "400g" },
    { nome: "Biscoito De Leite Condensado Recheado Com Goiabada 400G - Santa Maria Alimentos", preco: 9.50, img: "https://a-static.mlcdn.com.br/800x560/biscoito-de-leite-condensado-recheado-com-goiabada-400g-santa-maria-alimentos/oliststore/mglm3z4c0rhhdr62/52d2c92fd3e6c21ccfbed979b1e4c9ea.jpeg", quantidade: "400g" },
    { nome: "Creme de Leite Piracanjuba 200g", preco: 4.50, img: "https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/piracanjuba-cremedeleite-tradicional-200g-848x1007px-frontal-562.webp", quantidade: "200g" },
    { nome: "Farinha De Trigo Dona Benta 1kg", preco: 6.20, img: "https://a-static.mlcdn.com.br/800x560/farinha-de-trigo-dona-benta-1kg/casasantaluzia2/4541/9525cf41d185e4b90b8f156f9d8ea4b2.jpeg", quantidade: "1kg" },
    { nome: "IRequeijão Cremoso Tradicional VIGOR Copo 200g", preco: 7.80, img: "https://static.clubeextra.com.br/img/uploads/1/919/24675919.jpg", quantidade: "200g" },
    { nome: "biscoito de porvilho", preco: 8.99, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXcXzy5DneoidxjUs3LPOMlPLty9pOVjE0Y31N-FW9xpBs_1sWW3k77EFp4mxGqU8ErhwjV61MB143jfdqwxBE2BWwTBhrcFm12eHmw-8BCDVbaNk6oFuCHA&usqp=CAE", quantidade: "500g" },
    { nome: "Iogurte Integral Natural Nestlé Copo 170g", preco: 3.50, img: "https://static.paodeacucar.com/img/uploads/1/912/668912.jpg", quantidade: "170g" }
  ],
  mercearia: [
    { nome: "Arroz Tio João Branco 5kg ", preco: 19.99, img: "https://superprix.vteximg.com.br/arquivos/ids/174488/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000", quantidade: "5kg" },
    { nome: "feijão preto camil", preco: 7.99, img: "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/1582828742-mkp-feijao-preto-1kg-3-768x768.png", quantidade: "1kg" },
    { nome: "Macarrão de sêmola com ovos pena renata pacote 500g", preco: 4.99, img: "https://renata.com.br/images/produtos/43/renata-imagem-produtos-macarrao-renata-ovos-pena-embalagem-default.webp", quantidade: "500g" },
    { nome: "Óleo de soya 900ml", preco: 8.99, img: "https://cdn.shopify.com/s/files/1/0579/9742/6861/products/Oleo-de-Soja-Soya-900ml.png?v=1666624004&width=480&height=480", quantidade: "900ml" },
    { nome: "Açúcar união 1kg", preco: 3.99, img: "https://s3.amazonaws.com/lepok.w/produtos/produtos/90093.webp", quantidade: "1kg" },
    { nome: "Sal Refinado cisne 1kg", preco: 2.99, img: "https://static.clubeextra.com.br/img/uploads/1/632/454632.jpg", quantidade: "1kg" },
    { nome: "Café Torrado e Moído 3 Corações Tradicional a Vácuo 500g", preco: 15.99, img: "https://mercafefaststore.vtexassets.com/arquivos/ids/554739/3C-TORRADO-MOIDO-TRADICIONAL.png?v=638666755937630000", quantidade: "500g" },
    { nome: "Farinha de Milho Média Beatriz 1kg", preco: 4.99, img: "https://zaffari.vtexassets.com/arquivos/ids/265442/1011375-00.jpg?v=638701259330270000", quantidade: "1kg" },
    { nome: "Extrato de Tomate Quero Lata 350g", preco: 5.99, img: "https://static.clubeextra.com.br/img/uploads/1/648/3342648.png", quantidade: "350g" },
    { nome: "Leite em Pó Integral Sachê 1kg", preco: 12.99, img: "https://www.itambe.com.br/portal/Images/Produto/3ditambeleiteemposachet1kg_medium.png", quantidade: "1kg" },
    { nome: "Amido de Milho 500g", preco: 3.99, img: "https://a-static.mlcdn.com.br/800x560/amido-de-milho-maizena-500g/magazineluiza/225537100/42de68b915d6f54c66d65843890d3093.jpg", quantidade: "500g" },
    { nome: "Achocolatado em Pó Nescau Nestlé Sachê 550g", preco: 9.99, img: "https://zaffari.vtexassets.com/arquivos/ids/253038/1101617-00.jpg?v=638580350549530000", quantidade: "500g" },
    { nome: "Maionese Hellmanns Tradicional 500g", preco: 7.99, img: "https://a-static.mlcdn.com.br/800x560/maionese-hellmanns-tradicional-500g/magazineluiza/225537600/b8280180df0f20dc605167acef5a97af.jpg", quantidade: "500g" },
    { nome: "Molho de Pimenta Caseiro Picante 200ml", preco: 6.99, img: "https://www.soeto.com.br/uploads/produto/img_1424_20210310.png", quantidade: "200ml" },

  ],
  hortifrute: [
    { nome: "Banana Prata (1kg)", preco: 3.99, img: "https://organicosinbox.com.br/wp-content/uploads/2020/11/banana-prata-organica.jpg", quantidade: "1kg" },
    { nome: "Maçã 1kg", preco: 5.49, img: "https://phygital-files.mercafacil.com/fazfeira/uploads/produto/ma_nacional_gra_da_kg_a5aacdfd-3f44-4a5b-8fb6-61bffc4244f8.jpg", quantidade: "1kg" },
    { nome: "Tomate 1kg", preco: 4.99, img: "https://www.redeservebem.com/cdn/shop/products/tomate_480x.jpg?v=1739369608", quantidade: "1kg" },
    { nome: "Cenoura 1kg", preco: 3.49, img: "https://savegnagoio.vtexassets.com/arquivos/ids/350693-1200-auto?v=638080372163230000&width=1200&height=auto&aspect=true", quantidade: "1kg" },
    { nome: "Alface", preco: 2.99, img: "https://cdn.awsli.com.br/600x1000/1982/1982052/produto/174027508/53c931b15d.jpg", quantidade: "unidade" },
    { nome: "Laranja 1kg", preco: 4.49, img: "https://www.confianca.com.br/ccstore/v1/images/?source=/file/v8483851012342523952/products/1145045.1.jpg&height=300&width=300", quantidade: "1kg" },
    { nome: "Uva 1kg", preco: 6.99, img: "https://cdn.awsli.com.br/800x800/18/18885/produto/1972412/2699f58775.jpg", quantidade: "1kg" },
    { nome: "Pera 1kg", preco: 5.99, img: "https://images.tcdn.com.br/img/img_prod/450860/muda_de_pera_d_agua_ou_europeia_1m_enxertada_676_1_20190611093602.jpg", quantidade: "1kg" },
    { nome: "Morango 500g", preco: 7.99, img: "https://joov.com.br/images/morango-saiba-qual-e-a-sua-importancia-para-a-sua-saude-image.jpg", quantidade: "500g" },
    { nome: "Abacaxi", preco: 8.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnK0fNyHcdbWYNWSLPUwF_kh4o1j2eq5oxA&s", quantidade: "unidade" },
    { nome: "Kiwi 1kg", preco: 9.99, img: "https://acdn.mitiendanube.com/stores/002/296/660/products/kiwi1-1000x10001-73211e35474af9c27516661338347424-1024-1024.jpg", quantidade: "500g" },
    { nome: "Manga 1kg", preco: 6.99, img: "https://phygital-files.mercafacil.com/fazfeira/uploads/produto/manga_rosa_01d99caa-dd1a-45d1-945d-c8b622306627.jpg", quantidade: "1kg" },
    { nome: "Abobrinha 1kg", preco: 4.99, img: "https://ceagesp.gov.br/wp-content/uploads/2016/10/portalbobrinhabrasileira-600x469.jpg", quantidade: "1kg" },
    { nome: "Berinjela 1kg", preco: 5.99, img: "https://cdn.awsli.com.br/600x700/305/305913/produto/118031394/ba6a3b28f5.jpg", quantidade: "1kg" },
    { nome: "Pimentão 1kg", preco: 7.49, img: "https://www.infoescola.com/wp-content/uploads/2010/08/piment%C3%A3o_270503105.jpg", quantidade: "1kg" },
  ],
  acougue: [
    { nome: "Bife de Contra Filé 1kg", preco: 39.99, img: "https://loja.srfilet.com.br/cdn/shop/products/SrFilet-20.jpg?v=1601989737", quantidade: "500g" },
    { nome: "Carne Moída 1kg", preco: 29.99, img: "https://gynsol.agilecdn.com.br/110007_2_1.jpg?v=19-509361540", quantidade: "500g" },
    { nome: "Costela 1kg", preco: 49.99, img: "https://images.tcdn.com.br/img/img_prod/1074417/costela_bovina_em_tiras_1_35kg_353_1_ab991a0b6c0d6a78643eb43b04596eb3.jpg", quantidade: "1kg" },
    { nome: "Frango Inteiro 1.5kg", preco: 19.99, img: "https://swiftbr.vteximg.com.br/arquivos/ids/201801-768-768/617522-frago-inteiro_3.jpg?v=638665169405900000", quantidade: "1.5kg" },
    { nome: "Filé de Frango 1kg", preco: 24.99, img: "https://superprix.vteximg.com.br/arquivos/ids/218841-600-600/FILE-DE-PEITO.png?v=638333342006400000", quantidade: "500g" },
    { nome: "Picanha 1kg", preco: 69.99, img: "https://imagens.ebc.com.br/BpIKvkZaePUBcFyGVpdvrzM22yk=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/50436429531_b09fa9d8f7_o.jpg?itok=AtjxSjM7", quantidade: "1kg" },
    { nome: "Linguiça 1g", preco: 19.99, img: "https://www.seara.com.br/wp-content/uploads/2024/08/Linguica-Toscana-Seara-700g.webp", quantidade: "500g" },
    { nome: "Coxa de Frango 1kg", preco: 14.99, img: "https://fortatacadista.vteximg.com.br/arquivos/ids/291060-800-800/7893000005969.jpg?v=637509994922200000", quantidade: "1kg" },
    { nome: "Sobrecoxa 1kg", preco: 15.99, img: "https://www.redesuperbom.com.br/media/produtos/536x536/24645_barcelos_aves-congeladas_sobrecoxa-de-frango-sadia-1kg-congelado-zip.png", quantidade: "1kg" },
    { nome: "Filé Mignon 1KG", preco: 49.99, img: "https://cdn.irmaospatrocinio.com.br/img/p/1/7/3/6/8/5/173685-thickbox_default.jpg", quantidade: "500g" },
    { nome: "Bisteca Suína 1Kg", preco: 29.99, img: "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw7177ce03/Produtos/794040-0000000045803-bisteca%20suina%20sadia%20fatiada%20e%20congelada%20kg-sadia-1.jpg", quantidade: "500g" },
    { nome: "Costelinha de Porco 1kg", preco: 39.99, img: "https://www.sadia.com.br/assets/images/_/products/68a42ae7ec73230017a2a6f012f5b98c401665b5.webp", quantidade: "1kg" },
    { nome: "Alcatra 1kg", preco: 34.99, img: "https://carnes.rededesigner.com.br/wp-content/uploads/2024/12/alcatra-5-jpg.webp", quantidade: "1kg" },
    { nome: "Cupim 1kg", preco: 32.99, img: "https://apoioentrega.vteximg.com.br/arquivos/ids/818825-1000-1000/158053_0.png?v=638543685920600000", quantidade: "1kg" },
    { nome: "Patinho 500g", preco: 27.99, img: "https://ibassets.com.br/ib.item.image.large/l-06bb81ce37274ce7b5ad8bf859dee422.png", quantidade: "500g" },
  ],
  congelados: [
    { nome: "Pizza Congelada", preco: 14.99, img: "https://boa.vtexassets.com/arquivos/ids/543912/Pizza-Congelada-Napolitana-PERDIGAO-460g.png?v=638478525318570000", quantidade: "unidade" },
    { nome: "Legumes misto Congelados 1kg", preco: 9.99, img: "https://obahortifruti.vtexassets.com/arquivos/ids/10036623/Mix-Tailandes-Congelado-Daucy-300-G.png?v=638691727688630000", quantidade: "1kg" },
    { nome: "Frango Empanado 500g", preco: 16.99, img: "https://giassi.vtexassets.com/arquivos/ids/2744180/Empanado-de-Frango-Coxinha-da-Asa-Sadia-Pacote-400g.png?v=638627313070130000", quantidade: "500g" },
    { nome: "Sorvete 1kg", preco: 12.99, img: "https://redemix.vteximg.com.br/arquivos/ids/207919-1000-1000/7891150055957.jpg?v=638350599175530000", quantidade: "500ml" },
    { nome: "Hambúrguer Congelado ", preco: 19.99, img: "https://www.sadia.com.br/assets/images/_/products/997c737aa79c53240f756ccd92de68f5c8794e57.webp", quantidade: "4 unidades" },
    { nome: "Batata Frita Congelada 1kg", preco: 14.99, img: "https://giassi.vtexassets.com/arquivos/ids/2746885/Batata-Pre-Frita-Crinkle-Congelada-Bem-Brasil-Pacote-105kg.png?v=638627362995630000", quantidade: "1kg" },
    { nome: "Peixe Congelado 1kg", preco: 24.99, img: "https://avenidab2c.vtexassets.com/arquivos/ids/349503/Peixe-Sardinha-Eviscerada-Congelada-Bom-Peixe-500g.jpg?v=638624740140830000", quantidade: "1kg" },
    { nome: "Empanadas Congeladas 1kg", preco: 17.99, img: "https://tfchgi.vteximg.com.br/arquivos/ids/177338-1000-1000/49131.jpg?v=638491544801970000", quantidade: "500g" },
    { nome: "Arroz Parboilizado Congelado 1kg", preco: 11.99, img: "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/parbo-novo-768x768.jpg", quantidade: "1kg" },
    { nome: "Lasanha Congelada 1kg", preco: 19.99, img: "https://www.sondadelivery.com.br/Arquivos/ProdutosSku/1551060/7891515475680.png", quantidade: "1kg" },
    { nome: "Nuggets de Frango 500g", preco: 15.99, img: "https://www.davo.com.br/ccstore/v1/images/?source=/file/v7329600522438852565/products/prod_7894904284726.imagem1.jpg&height=940&width=940", quantidade: "500g" },
    { nome: "Legumes  Congelados 1kg", preco: 10.99, img: "https://phygital-files.mercafacil.com/catalogo/uploads/produto/ervilha_congelada_de_marchi_pacote_300g_29b142a8-8d61-4599-b212-0135fec64050.png", quantidade: "1kg" },
    { nome: "Mini Pastéis Congelados 1kg", preco: 13.99, img: "https://www.deepfreeze.com.br/img/pratos/big/cf02_mini_pasteis_de_carne_18_unidades2212051244300.jpg", quantidade: "500g" },
    { nome: "Quibe Congelado kg", preco: 12.99, img: "https://www.extraplus.com.br/uploads/produtos/original/154352_20210114093129_thumb_MINI_KIBE_COM_REQUEIJAO.png", quantidade: "500g" },
    { nome: "Pão de Queijo Congelado 1kg", preco: 14.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNadQakGYa5nBX0-1YBkIL23RitSOgICLcZg&s", quantidade: "500g" },
  ],
  padaria: [
    { nome: "Pão Francês", preco: 0.50, img: "https://www.sabornamesa.com.br/media/k2/items/cache/f59fd3a46f2adbbd9dd6269010353971_XL.jpg", quantidade: "unidade" },
    { nome: "Croissant", preco: 3.99, img: "https://catracalivre.com.br/wp-content/uploads/2023/12/istock-1190095752-1.jpg", quantidade: "unidade" },
    { nome: "Bolo de Fubá 1kg", preco: 14.99, img: "https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22.jpeg", quantidade: "1kg" },
    { nome: "Muffin", preco: 2.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyskqV3qDoMgjhdBgGyWxBc2MYvRYRTfflw&s", quantidade: "unidade" },
    { nome: "Pão Integral ", preco: 6.99, img: "https://carrefourbrfood.vtexassets.com/arquivos/ids/190289/9734384_1.jpg?v=637272422314700000", quantidade: "500g" },
    { nome: "Pão de Queijo 500g", preco: 8.99, img: "https://i.panelinha.com.br/i1/228-bk-1245-blog-cmc04774-1.webp", quantidade: "500g" },
    { nome: "bolo de chocolate", preco: 19.99, img: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-chocolate-rapido-e-molhadinho-capa.png", quantidade: "1kg" },
    { nome: "Pão de Forma Integral 500g", preco: 7.99, img: "https://carrefourbrfood.vtexassets.com/arquivos/ids/87395669/pao-de-forma-integral-crf-classic-500g-1.jpg?v=638048967870930000", quantidade: "500g" },
    { nome: "Rosca de Canela", preco: 4.99, img: "https://s2-receitas.glbimg.com/fM75-r4LZZiOKUCBTAACPqte7Xg=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/H/1/8am32aTXePDOOTwFQxkQ/rosca-de-canela.jpg", quantidade: "unidade" },
    { nome: "Pão Italiano 500g", preco: 8.99, img: "https://organicosinbox.com.br/wp-content/uploads/2020/12/pao-italiano-organico-purus-panis-2.jpg", quantidade: "500g" },
    { nome: "Donuts (4un)", preco: 5.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDV9HEVb5xV7xEOirre414iDY2eYr2udw2NQ&s", quantidade: "4 unidades" },
    { nome: "Baguete Francesa", preco: 6.99, img: "https://www.padariavianney.com.br/web/image/product.template/3133/image_1024?unique=7269beb", quantidade: "unidade" },
    { nome: "Pão de Milho 500g", preco: 7.99, img: "https://covabra.vtexassets.com/arquivos/ids/199390-800-450?v=638168230946770000&width=800&height=450&aspect=true", quantidade: "500g" },
    { nome: "Cupcake", preco: 2.99, img: "https://internovias.com.br/wp-content/uploads/2018/04/7-1.jpg", quantidade: "unidade" },
    { nome: "Focaccia 500g", preco: 8.99, img: "https://i.ytimg.com/vi/iWSlbd5NnN8/maxresdefault.jpg", quantidade: "500g" },

  ],
  limpeza: [
    { nome: "Detergente Líquido ypé 500ml", preco: 3.99, img: "https://t10917.vteximg.com.br/arquivos/ids/169669/DETERG--LIQ-500ML-YPE-NEUTRO_IMG1.jpg?v=638743772169300000", quantidade: "500ml" },
    { nome: "Desinfetante ypé 1L", preco: 5.99, img: "https://t10917.vteximg.com.br/arquivos/ids/168976-1000-1000/DESINF---1-LT-YPE-BAK-LAVANDA_IMG1.jpg?v=638742974769500000", quantidade: "1L" },
    { nome: "Sabão em Pó brilhante 1kg", preco: 8.99, img: "https://cdn.awsli.com.br/446/446822/produto/19402172/shopping--98--q9tufd07hv.jpg", quantidade: "1kg" },
    { nome: "Multiuso 500ml", preco: 4.99, img: "https://www.papelplasticoecia.com.br/product_images/s/063/fotos-com-fundos-removidos-26571-30073_std.png", quantidade: "500ml" },
    { nome: "Limpador de Vidros 500ml", preco: 5.99, img: "https://images.tcdn.com.br/img/img_prod/1240382/limpa_vidros_500_ml_vintex_93_1_85ce74afaae95b202bb713a0c11b31ee.png", quantidade: "500ml" },
    { nome: "Álcool em Gel 500ml", preco: 6.99, img: "https://loja.agflex.com.br/image/cache/catalog/produtos/alcool-gel/Asseptgel%20500G-1000x1000.JPG", quantidade: "500ml" },
    { nome: "Esponja de Limpeza", preco: 2.99, img: "https://www.promolimp.com.br/media/catalog/product/cache/1/thumbnail/600x500/9df78eab33525d08d6e5fb8d27136e95/e/s/esponja_s_1.jpg", quantidade: "unidade" },
    { nome: "Desengordurante 1L", preco: 7.99, img: "https://distcoimbra.vteximg.com.br/arquivos/ids/182906-1000-1000/limpador-cif-desengordurante-cozinha-ultra-rapido-squeezer-500ml-69762651-1.jpg?v=638247742525570000", quantidade: "1L" },
    { nome: "Amaciante de Roupas 1L", preco: 6.99, img: "https://zaffari.vtexassets.com/arquivos/ids/245829/1034245-00.jpg?v=638410938671070000", quantidade: "1L" },
    { nome: "Sabão em Barra 200g", preco: 2.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9-awpL18aBl2aQ0ytXlirO9ZWZOx1YZ0JQ&s", quantidade: "200g" },
    { nome: "Removedor de Manchas 500ml", preco: 5.99, img: "https://http2.mlstatic.com/D_Q_NP_887536-MLU75985650095_042024-O.webp", quantidade: "500ml" },
    { nome: "Limpa Piso 1L", preco: 4.99, img: "https://cdn.awsli.com.br/800x800/941/941759/produto/39231608a4ec3de2e3.jpg", quantidade: "1L" },
    { nome: "Limpa Móveis 500ml", preco: 5.99, img: "https://cepel.vteximg.com.br/arquivos/ids/170303-1000-1000/Design-sem-nome--37-.png?v=638121684794930000", quantidade: "500ml" },
    { nome: "Desinfetante Multiuso 1L", preco: 6.99, img: "https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896098903308/img_1200_1.png", quantidade: "1L" },
    { nome: "Sabão Líquido para Roupas 1L", preco: 6.99, img: "https://m.media-amazon.com/images/I/51ahkrmCA+L._AC_SY300_SX300_.jpg", quantidade: "1L" },
  ]
};

let carrinho = [];

function showSection(sectionId) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  produtos[sectionId].forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.nome}">
      <h3>${product.nome}</h3>
      <p>${product.quantidade}</p>
      <p>R$ ${product.preco.toFixed(2)}</p>
      <button onclick="addToCart('${product.nome}', ${product.preco})">Adicionar</button>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart(nome, preco) {
  const produtoCarrinho = carrinho.find(item => item.nome === nome);
  if (produtoCarrinho) {
      produtoCarrinho.quantidade += 1;
  } else {
      carrinho.push({ nome, preco, quantidade: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let totalPreco = 0;
  carrinho.forEach(item => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML = `
          <span>${item.nome} (x${item.quantidade})</span>
          <button onclick="changeQuantity('${item.nome}', -1)">-</button>
          <button onclick="changeQuantity('${item.nome}', 1)">+</button>
          <strong>R$ ${(item.preco * item.quantidade).toFixed(2)}</strong>
      `;
      cartItems.appendChild(cartItemDiv);
      totalPreco += item.preco * item.quantidade;
  });
  document.getElementById("total").textContent = totalPreco.toFixed(2);
  document.getElementById("checkout").disabled = carrinho.length === 0;
  document.getElementById("pagamento").style.display = carrinho.length > 0 ? "block" : "none";
}


function changeQuantity(nome, amount) {
  const produtoCarrinho = carrinho.find(item => item.nome === nome);
  if (produtoCarrinho) {
      produtoCarrinho.quantidade += amount;
      if (produtoCarrinho.quantidade <= 0) {
          carrinho = carrinho.filter(item => item.nome !== nome);
      }
  }
  updateCart(); // Agora a atualização do carrinho ocorre corretamente
}
document.addEventListener("DOMContentLoaded", () => {
  showSection("bebidas");
  updateCart(); // Garante que o carrinho seja atualizado ao carregar a página
});

document.getElementById("pagamento").addEventListener("click", () => {
  document.getElementById("modalPagamento").style.display = "flex";
});

function realizarPagamento() {
  alert("Pagamento realizado com sucesso!");
  carrinho = [];
  updateCart();
  fecharModal();
}

function fecharModal() {
  document.getElementById("modalPagamento").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("bebidas");
});
// Adicionar funcionalidade de busca com sugestões
const searchInput = document.getElementById("search");
const suggestionsDiv = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    suggestionsDiv.innerHTML = "";
    if (query.length > 0) {
        let suggestions = [];
        Object.entries(produtos).forEach(([category, items]) => {
            items.forEach(product => {
                if (product.nome.toLowerCase().includes(query)) {
                    suggestions.push({ ...product, category });
                }
            });
        });
        
        if (suggestions.length > 0) {
            suggestionsDiv.style.display = "block";
            suggestions.forEach(product => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.innerHTML = `
                    <img src="${product.img}" alt="${product.nome}" class="suggestion-img" style="width: 40px; height: 40px; margin-right: 10px; border-radius: 4px;">
                    <span>${product.nome}</span>
                `;
                suggestionItem.addEventListener("click", () => {
                    searchInput.value = product.nome;
                    suggestionsDiv.style.display = "none";
                    showSection(product.category);
                });
                suggestionsDiv.appendChild(suggestionItem);
            });
        } else {
            suggestionsDiv.style.display = "none";
        }
    } else {
        suggestionsDiv.style.display = "none";
    }
});
// Estilizar a barra de pesquisa
// Estilizar a barra de pesquisa
searchInput.style.width = "100%";
searchInput.style.maxWidth = "400px";
searchInput.style.padding = "10px";
searchInput.style.border = "2px solid #357ab8";
searchInput.style.borderRadius = "8px";
searchInput.style.fontSize = "16px";
searchInput.style.outline = "none";
searchInput.style.transition = "border-color 0.3s";

searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#2a5d9f";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "#357ab8";
});

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    suggestionsDiv.innerHTML = "";
    if (query.length > 0) {
        let suggestions = [];
        Object.entries(produtos).forEach(([category, items]) => {
            items.forEach(product => {
                if (product.nome.toLowerCase().includes(query)) {
                    suggestions.push({ ...product, category });
                }
            });
        });
        
        if (suggestions.length > 0) {
            suggestionsDiv.style.display = "block";
            suggestionsDiv.style.background = "#fff";
            suggestionsDiv.style.border = "1px solid #ccc";
            suggestionsDiv.style.borderRadius = "8px";
            suggestionsDiv.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            suggestionsDiv.style.maxHeight = "250px";
            suggestionsDiv.style.overflowY = "auto";
            suggestionsDiv.style.padding = "5px";

            suggestions.forEach(product => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.style.display = "flex";
                suggestionItem.style.alignItems = "center";
                suggestionItem.style.padding = "8px";
                suggestionItem.style.cursor = "pointer";
                suggestionItem.style.borderBottom = "1px solid #eee";
                suggestionItem.style.transition = "background 0.3s";

                suggestionItem.innerHTML = `
                    <img src="${product.img}" alt="${product.nome}" class="suggestion-img" style="width: 30px; height: 30px; margin-right: 10px; border-radius: 4px; object-fit: cover;">
                    <span style="font-size: 14px; color: #333;">${product.nome}</span>
                `;
                suggestionItem.addEventListener("click", () => {
                    searchInput.value = product.nome;
                    suggestionsDiv.style.display = "none";
                    showSection(product.category);
                    setTimeout(() => {
                        const productElements = document.querySelectorAll(".product h3");
                        productElements.forEach(el => {
                            if (el.textContent === product.nome) {
                                el.scrollIntoView({ behavior: "smooth", block: "center" });
                            }
                        });
                    }, 300);
                });
                suggestionItem.addEventListener("mouseover", () => {
                    suggestionItem.style.background = "#f0f4f8";
                });
                suggestionItem.addEventListener("mouseout", () => {
                    suggestionItem.style.background = "#fff";
                });
                suggestionsDiv.appendChild(suggestionItem);
            });
        } else {
            suggestionsDiv.style.display = "none";
        }
    } else {
        suggestionsDiv.style.display = "none";
    }
});
// Estilizar a seção de produtos
document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    if (productList) {
        productList.style.display = "grid";
        productList.style.gridTemplateColumns = "repeat(auto-fill, minmax(220px, 1fr))";
        productList.style.gap = "15px";
        productList.style.justifyContent = "center";
        productList.style.padding = "20px";
    }
    
    const productCards = document.querySelectorAll(".product");
    productCards.forEach(card => {
        card.style.background = "#fff";
        card.style.border = "1px solid #dde1e7";
        card.style.borderRadius = "10px";
        card.style.padding = "15px";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        card.style.transition = "transform 0.3s, box-shadow 0.3s";

        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
// Estilizar a seção de produtos
document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    if (productList) {
        productList.style.display = "grid";
        productList.style.gridTemplateColumns = "repeat(auto-fill, minmax(220px, 1fr))";
        productList.style.gap = "15px";
        productList.style.justifyContent = "center";
        productList.style.padding = "20px";
    }
    
    const productCards = document.querySelectorAll(".product");
    productCards.forEach(card => {
        card.style.background = "#fff";
        card.style.border = "1px solid #dde1e7";
        card.style.borderRadius = "10px";
        card.style.padding = "15px";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        card.style.transition = "transform 0.3s, box-shadow 0.3s";

        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
// Estilizar a seção de produtos
document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    if (productList) {
        productList.style.display = "grid";
        productList.style.gridTemplateColumns = "repeat(auto-fill, minmax(220px, 1fr))";
        productList.style.gap = "15px";
        productList.style.justifyContent = "center";
        productList.style.padding = "20px";
    }
    
    const productCards = document.querySelectorAll(".product");
    productCards.forEach(card => {
        card.style.background = "#fff";
        card.style.border = "1px solid #dde1e7";
        card.style.borderRadius = "10px";
        card.style.padding = "15px";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        card.style.transition = "transform 0.3s, box-shadow 0.3s";

        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
