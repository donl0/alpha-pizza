export function getSizePrice(currentSize, sizeCosts) {
    const result = sizeCosts.find((sizeCost) => sizeCost["size"] === currentSize);

    if (result !== null && result !== undefined) {
        return result["cost"];
    }

    throw new Error('Not found!');
}

export function getSizePriceWhereSame(currentSize, sizes, costs) {
    const index = sizes.indexOf(currentSize);

    const prise = costs[index];

    return prise;
}