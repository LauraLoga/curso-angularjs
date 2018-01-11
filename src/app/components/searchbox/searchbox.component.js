import template from './searchbox.html';

const SearchBoxComponent = {
  template,
  bindings: {
    params: '<',
    onSearch: '&',
  },
  controller: class SearchBoxController {
    constructor($log) {
      this.$log = $log;
    }

    $onInit() {
      this.params = Object.assign({}, this.params);
    }

    onSubmit() {
      this.onSearch({
        $event: {
          newValue: this.params.value,
        },
      });
    }

    onFocus() {
      this.whenFocus = true;
    }
  },
};

export default SearchBoxComponent;
