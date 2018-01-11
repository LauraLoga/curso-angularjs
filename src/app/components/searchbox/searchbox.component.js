import template from './searchbox.html';

const SearchBoxComponent = {
  template,
  controller: class SearchBoxController {
    constructor($log) {
      this.$log = $log;
    }

    onSubmit() {
      this.$log.debug(this.busqueda);
    }

    onFocus() {
      this.whenFocus = true;
    }
  },
};

export default SearchBoxComponent;
