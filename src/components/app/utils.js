export const openLink = (link) => {
  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  a.click();
}