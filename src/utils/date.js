var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
export function formatDate( date ){
    return date.toLocaleDateString('vi-VN', options);
}
