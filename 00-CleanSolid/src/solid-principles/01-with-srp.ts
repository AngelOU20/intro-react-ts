(() => {
  interface Product {
    id: number;
    name: string;
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    // Inyección de dependencias
    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['eduardo@gmail.com'], 'to-client');
    }
  }

  class ProductService {
    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product);
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      console.log('Agregando al carrito', productId);
    }
  }

  class Mailer {
    private masterEmail: string = 'julio_ucharima@google.com';

    sendEmail(_emailList: string[], template: 'to-client' | 'to-admins') {
      console.log('Enviando correo a los clientes', template);
    }
  }

  // Creando instancias
  const productService = new ProductService();
  const mailer = new Mailer();

  const cartBloc = new CartBloc();

  // Inyección de dependencias
  const productBloc = new ProductBloc(productService, mailer);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
