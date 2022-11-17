export const buttonTemplate = (id: string, name: string) => {
  return `
    <button
      id="${id}"
      type="button"
      class="btn btn-primary"
    >
      ${name}
    </button>
  `;
};
