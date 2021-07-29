import React from "react";
import "../index.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propvince: [],
      cities: [],
      selectProvince: "",
    };
    this.changeProvince = this.changeProvince.bind(this);
  }

  componentDidMount() {
    this.setState({
      propvince: [
        { name: "البرز", cities: [" کرج", "شهریار"] },
        { name: "ایلام", cities: [" دهلران", "ایوان"] },
        { name: "بوشهر", cities: [" برازجان", "گناوه"] },
        { name: "تهران", cities: ["کرج", "دماوند"] },
        { name: "اراک", cities: ["ساوه", "خمین"] },
        { name: "شیراز", cities: ["کازرون", "فارس"] },
        { name: "قم", cities: ["دستجرد", "سلفچگان"] },
        { name: "هرمزگان", cities: ["بندرعباس", "قشم"] },
        { name: "همدان", cities: ["ملایر", "رزن"] },
        { name: "خوزستان", cities: ["دزفول", "اهواز"] },
      ],
    });
  }

  changeProvince(event) {
    this.setState({ selectedProvince: event.target.value });
    this.setState({
      cities: this.state.propvince.find(
        (pro) => pro.name === event.target.value
      ).cities,
    });
  }

  render() {
    return (
      <div className="name" style={{ width: "48%" }}>
        <select
          value={this.state.selectedProvince}
          onChange={this.changeProvince}
          defaultValue="0"
          style={{ flexBasis: "100%" }}
        >
          <option value="0" disabled>
            نام استان
          </option>
          {this.state.propvince.map((e, key) => {
            return <option key={key}>{e.name}</option>;
          })}
        </select>

        <select
          style={{
            display: this.state.cities.length === 0 ? "none" : "block",
            marginRight: "5%",
          }}
        >
          <option>شهر</option>
          {this.state.cities.map((e, key) => {
            return <option key={key}>{e}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Dropdown;
