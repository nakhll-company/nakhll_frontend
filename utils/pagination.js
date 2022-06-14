export function paginationStructure(current, total) {
  const page = [];
  if (current - 2 > 1) {
    page.push({
      name: "اولین",
      disabled: false,
      page: 1,
    });
    page.push({
      name: "قبلی",
      disabled: false,
      page: current - 1,
    });
    page.push({
      name: "...",
      disabled: true,
      page: false,
    });
    page.push({
      name: current - 2,
      disabled: false,
      page: current - 2,
    });
    page.push({
      name: current - 1,
      disabled: false,
      page: current - 1,
    });
    page.push({
      name: current,
      disabled: false,
      page: current,
      active: true,
    });
  } else if (current - 1 > 1) {
    page.push({
      name: "اولین",
      disabled: true,
      page: 1,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
    page.push({
      name: "قبلی",
      disabled: false,
      page: current - 1,
    });
    page.push({
      name: current - 2,
      disabled: false,
      page: current - 2,
    });
    page.push({
      name: current - 1,
      disabled: false,
      page: current - 1,
    });
    page.push({
      name: current,
      disabled: false,
      page: current,
      active: true,
    });
  } else if (current > 1) {
    page.push({
      name: "اولین",
      disabled: true,
      page: 1,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
    page.push({
      name: "قبلی",
      disabled: false,
      page: current - 1,
    });
    page.push({
      name: current - 1,
      disabled: false,
      page: current - 1,
    });
    page.push({
      name: current,
      disabled: false,
      page: current,
      active: true,
    });
  } else if (current === 1) {
    page.push({
      name: "اولین",
      disabled: true,
      page: 1,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
    page.push({
      name: "قبلی",
      disabled: true,
      page: current - 1,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
    page.push({
      name: current,
      disabled: false,
      page: current,
      active: true,
    });
  }

  if (current + 2 < total) {
    page.push({
      name: current + 1,
      disabled: false,
      page: current + 1,
    });
    page.push({
      name: current + 2,
      disabled: false,
      page: current + 2,
    });
    page.push({
      name: "...",
      disabled: true,
      page: false,
    });
    page.push({
      name: "بعدی",
      disabled: false,
      page: current + 1,
    });
    page.push({
      name: "آخرین",
      disabled: false,
      page: total,
    });
  } else if (current + 1 < total) {
    page.push({
      name: current + 1,
      disabled: false,
      page: current + 1,
    });
    page.push({
      name: current + 2,
      disabled: false,
      page: current + 2,
    });
    page.push({
      name: "بعدی",
      disabled: false,
      page: current + 1,
    });
    page.push({
      name: "آخرین",
      disabled: true,
      page: total,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
  } else if (current < total) {
    page.push({
      name: current + 1,
      disabled: false,
      page: current + 1,
    });
    page.push({
      name: "بعدی",
      disabled: false,
      page: current + 1,
    });
    page.push({
      name: "آخرین",
      disabled: true,
      page: total,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
  } else if (current === total) {
    page.push({
      name: "بعدی",
      disabled: true,
      page: current + 1,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
    page.push({
      name: "آخرین",
      disabled: true,
      page: total,
      style: {
        color: "#343a40",
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
      },
    });
  }
  return page;
}
