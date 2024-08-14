namespace Application.Interfaces.Services
{
    public interface ISaveService<T, V>
    {
        public Task<V> SaveAsync(T value);
        public Task<List<V>> SaveAsync(ICollection<T> values);
    }
}
