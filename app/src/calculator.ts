import { error } from 'console';

export default function calculate(
    a: number,
    b: number,
    funcId: number
): number {
    switch (funcId) {
        case 0:
            return a + b;
        default:
            throw error('Function not defined.');
    }
}
