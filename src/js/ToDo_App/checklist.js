export function addItem(checklist, listItem, checked = false) {
  checklist.push([listItem, checked]);
}

export function toggleChecked(checklist, index) {
  const listItem = checklist[index];
  if (listItem[1]) {
    listItem[1] = false;
  } else {
    listItem[1] = true;
  }
}

export function changeItemContent(checklist, index, content) {
  const listItem = checklist[index];
  listItem[0] = content;
}

// Might need to make something like this later
// export default function makeChecklist()
