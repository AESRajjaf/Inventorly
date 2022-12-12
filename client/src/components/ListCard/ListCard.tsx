//ListCard Component

// Icons Import
import SearchIcon from "../../assets/Icons/Search.svg";
import FilterIcon from "../../assets/Icons/Filter.svg";
import ChevronBottomIcon from "../../assets/Icons/ChevronBottom.svg";
import SortIcon from "../../assets/Icons/Sort.svg";

// Styles Import
import styles from "./ListCard.module.css";

const data = [
  {
    name: "T-Shirt",
    category: "Ropa",
    purchasePrice: 24.99,
    sellingPrice: 34.99,
    quantity: 45,
    descritpion: "Lorem ipsum nose que decir aqui descripcion del producto",
    image: "Photo.png",
    pdtRef: "456456456",
    status: "Publicado",
  },
  {
    name: "iPhone X",
    category: "Telefon",
    purchasePrice: 124.99,
    sellingPrice: 134.99,
    quantity: 85,
    descritpion: "Lorem ipsum nose que decir aqui descripcion del producto",
    image: "Photo.png",
    pdtRef: "456456456",
    status: "Publicado",
  },
  {
    name: "Reloj W566",
    category: "Accesorios",
    purchasePrice: 424.99,
    sellingPrice: 534.99,
    quantity: 45,
    descritpion: "Lorem ipsum nose que decir aqui descripcion del producto",
    image: "Photo.png",
    pdtRef: "456456456",
    status: "En borrador",
  },
  {
    name: "Pantalon",
    category: "Ropa",
    purchasePrice: 94.99,
    sellingPrice: 104.99,
    quantity: 45,
    descritpion: "Lorem ipsum nose que decir aqui descripcion del producto",
    image: "Photo.png",
    pdtRef: "456456456",
    status: "En borrador",
  },
];

const ListCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.table}>
        <div className={styles.listBar}>
          <div className={styles.filters}>
            <div className={styles.searchBar}>
              <img src={SearchIcon} />
              <input type="text" placeholder="Buscar Productos" />
            </div>
            <button className={styles.filter}>
              <img src={FilterIcon} />
              Filtro
            </button>
          </div>
          <div className={styles.select}>
            <select>
              <option value="0">Accion seleccionada</option>
            </select>
            <img src={ChevronBottomIcon} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colZero}>
            <input type="checkbox" />
          </div>
          <div className={styles.colOne}>
            Nombre del producto <img src={SortIcon} className={styles.icon} />
          </div>
          <div className={styles.colTwo}>
            Categoría <img src={SortIcon} className={styles.icon} />
          </div>
          <div className={styles.colThree}>
            Precio <img src={SortIcon} className={styles.icon} />
          </div>
          <div className={styles.colFour}>
            Inventario <img src={SortIcon} className={styles.icon} />
          </div>
          <div className={styles.colFive}>
            Valor total <img src={SortIcon} className={styles.icon} />
          </div>
          <div className={styles.colSix}>
            Acción <img src={SortIcon} className={styles.icon} />
          </div>
          <div className={styles.colSeven}>
            Estado <img src={SortIcon} className={styles.icon} />
          </div>
        </div>

        {data.map((product) => (
          <div className={styles.rows}>
            <div className={styles.colZero}>
              <input type="checkbox" />
            </div>
            <div className={styles.colOne}>
              <img
                src={
                  "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
                }
                className={styles.productImg}
              />
              {product.name}
            </div>
            <div className={styles.colTwo}>{product.category}</div>
            <div className={styles.colThree}>{product.purchasePrice} €</div>
            <div className={styles.colFour}>{product.quantity} Uds.</div>
            <div className={styles.colFive}>
              {product.purchasePrice * product.quantity} €
            </div>
            <div className={styles.colSix}>{product.status}</div>
            <div className={styles.colSeven}>
              <span
                className={styles.status}
                style={
                  product.status === "En borrador"
                    ? { color: "#d27401", backgroundColor: "#FFF2E2" }
                    : { color: "#5570f1", backgroundColor: "#5570f116" }
                }
              >
                {product.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCard;
