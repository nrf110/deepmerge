type PartialDeep<T> = {[K in keyof T]?: PartialDeep<T[K]>};

declare function deepmerge<T>(x: PartialDeep<T>, y: PartialDeep<T>, options?: deepmerge.Options): T;
declare function deepmerge<T1, T2>(x: PartialDeep<T1>, y: PartialDeep<T2>, options?: deepmerge.Options): T1 & T2;

declare namespace deepmerge {
	export interface Options {
		arrayMerge?(target: any[], source: any[], options?: Options): any[];
		clone?: boolean;
		customMerge?: (key: string, options?: Options) => ((x: any, y: any) => any) | undefined;
		isMergeableObject?(value: object): boolean;
	}

	export function all (objects: object[], options?: Options): object;
	export function all<T> (objects: Partial<T>[], options?: Options): T;
}

export = deepmerge;
