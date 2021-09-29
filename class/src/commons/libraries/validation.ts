export function imageValidation(file) {
  if (!file) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한 5mb)");
    return false;
  }

  // 9월 28일 11시 53분
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg또는 png만 업로드 가능합니다!");
    return false;
  }
  return true;
}
