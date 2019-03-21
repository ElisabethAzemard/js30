document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');
  // console.log(inputs);

  const handleUpdate = e => {
    const suffix = e.target.dataset.prefix || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}${suffix}`);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

});
